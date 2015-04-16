
PG.Arena = function(game) {};
PG.Arena.prototype = {
    preload: function() {},

    create: function() {
        PG._combat = this.combat = new PG.Combat(this);
        $('#arena').show();
    },

    shutdown: function() {
        this.combat.shutdown();
    },

    update: function() {
        this.combat.update();
    }
};



PG.Combat = function(that) {

    var tiles,
        startX,
        startY,
        mobs = [],
        movementTiles = [],
        wave = 0,
        brinleySprite,
        arrow,
        swingReady = true,
        shootReady = true,
        mobsKilled,
        dustColor,
        swordStatSprite,
        arrowStatSprite,
        swingTimer,
        shootTimer;

    //game container
    PG.holder = PG.game.add.group();
    PG.holder.position.y = PG.half;
    PG.holder.position.x = (PG.game.width - (PG.tileSize*5)) / 2;

    //borders
    PG.borders = PG.game.add.graphics();
    PG.borders.beginFill(0x111111, 1);
    PG.borders.drawRect(0, 0, PG.holder.position.x, PG.game.height);
    PG.borders.drawRect(PG.game.width - PG.holder.position.x, 0, PG.holder.position.x, PG.game.height);

    //use normal story level, arena, or boss
    if(PG.storyMode) {
        if(PG.bossDead) {
            PG.level = DATA.levels[DATA.levels.length-2];
        } else if(PG.brinley.level == 34) {
            PG.level = getArenaLevel();
        }
        else {
            PG.level = DATA.levels[PG.brinley.level];
        }
    } else {
        if(PG.boss) {
            PG.level = DATA.levels[DATA.levels.length-4];
            //swap out original boss map with an arena
            PG.level.arena = getArenaLevel().arena;
        } else {
            PG.level = getArenaLevel();
        }
    }

    //some level props
    startX = pos(PG.level.start.x),
    startY = pos(PG.level.start.y),
    tiles = PG.level.arena;
    dustColor = PG.level.dust;

    createTiles();
    createStats();
    createBrinley();
    createWave();


    var dust = PG.game.add.graphics(),
        particles = [],
        dustTimer;

        dust.x = PG.holder.x;
        dust.y = PG.holder.y;
        dust.width = PG.tileSize * 5;
        dust.height = PG.tileSize * 9;
        

    startDust();

    PG.combatSpecial(PG.level.id, mobs);
    //guard stomp!
    if(PG.level.id == 29) {
        setTimeout(function() {
            var g1 = addSprite(pos(0), pos(2), 'mobs', 'guard.png');
            var g2 = addSprite(pos(2), pos(0), 'mobs', 'guard.png');
            var g3 = addSprite(pos(0), pos(5), 'mobs', 'guard.png');
            var g4 = addSprite(pos(4), pos(5), 'mobs', 'guard.png');
            for(var i=0; i<mobs.length; i++) {
                damageMob(mobs[i], 100000);
            }
        }, 3000);
    }

    function startDust() {
        var dustDiagonalRange,
            dustStartX,
            dustEndY,
            particle,
            pace;

        pace = 100 + Math.floor(Math.random() * 300);

        //start on left or right of screen;
        dustStartX = Math.random() < 0.5 ? -10 : PG.tileSize*5 + 10;

        //general angle dust travels (y difference from start)
        dustDiagonalRange = PG.game.height / -6;
        dustEndY = dustDiagonalRange + (Math.random() * (dustDiagonalRange* 2));
        
        window.clearInterval(dustTimer);
        dustTimer = window.setInterval(function() {
            //only do dust half the time
            if(Math.random() < 0.8) {
                particle = {
                    startX: dustStartX,
                    startY: Math.random() * PG.game.height,
                    x: dustStartX,
                    endX: dustStartX < 0 ? PG.tileSize*5 + 10 : -10,
                    speed: 2 + Math.random() * 4,
                    radius: 2 + Math.random() * 6
                }
                particle.y = particle.startY;
                particle.endY = particle.y + dustEndY;
                particle.angle = Math.atan2(particle.endY - particle.y, particle.endX - particle.x) * 180 / Math.PI;
                
                particles.push(particle);
            }
        }, pace);
    }

    function createStats() {
        //sword
        swordStatSprite = PG.game.add.sprite(PG.holder.position.x + PG.half*0.5, PG.half*0.5, 'items', 'sword1.png');
        swordStatSprite.scale.setTo(PG.tileScale*0.35, PG.tileScale*0.35);
        swordStatSprite.anchor.setTo(0.5, 0.5);

        //arrow
        arrowStatSprite = PG.game.add.sprite(PG.game.width - PG.half*0.5 - PG.holder.position.x, PG.half*0.5, 'items', 'arrow1.png');
        arrowStatSprite.scale.setTo(PG.tileScale*0.66, PG.tileScale*0.66);
        arrowStatSprite.anchor.setTo(0.5, 0.5);

        //lifebar
        PG.lifebar = PG.game.add.graphics(PG.holder.position.x + PG.half, PG.half*0.4);

        //powerup
        PG.powerup = PG.game.add.graphics(PG.holder.position.x + PG.half, PG.half*0.6);

        //boss bar
        PG.bossbar = PG.game.add.graphics(PG.holder.position.x + PG.half, PG.half*0.7);
    }

    function createBrinley() {
        brinleySprite = addSprite(startX, startY, 'mobs', 'brinley.png');
        brinleySprite.inputEnabled = true;
        brinleySprite.events.onInputDown.add(brinleyDown, that);

        //game pointer up event
        PG.game.input.onUp.add(gameUp, that);

        PG.brinleySprite = brinleySprite;
        PG.brinley.tile = PG.level.start;
        PG.brinley.life = 100 + (PG.brinley.defense * 3);
        updateLifebar(PG.brinley.life, PG.brinley.life);
    }

    function createTiles() {
        var tileSprite,
            tileId,
            posX,
            posY,
            matrix = [];

        for(var i=0; i<9; i++) {
            matrix[i] = [];
            movementTiles[i] = [];
            for(var j=0; j<5; j++) {

                //graphic tile
                tileId = tiles[i][j].id + '.png';
                posX = pos(j);
                posY = pos(i);
                matrix[i][j] = tiles[i][j].w ? 0 : 1;
                
                if(tiles[i][j].id.indexOf('w-') == 0) {
                    tileSprite = addSprite(posX, posY, 'wenv', tileId);
                } else {
                    tileSprite = addSprite(posX, posY, 'oenv', tileId);
                }   

                movementTiles[i][j] = tileSprite;

                tileSprite.angle = tiles[i][j].rot;
                tileSprite.inputEnabled = true;
                tileSprite.events.onInputDown.add(tileClicked, that);
            }
        }

        PG.level.matrix = matrix;
    }

    function getArenaLevel() {
        var lvl = {
            id: 'arena',
            dust: '0xd83535',
            start: {x: 2, y: 7},
            arena: DATA.arenaMaps[Math.floor(Math.random()*DATA.arenaMaps.length)],
            mobs: [[]]
        };
        
        var numberOfMobs = 2 + Math.floor(Math.random()*3),
            humans = Math.random() < 0.66 ? true : false,
            choices = humans ? DATA.arenaMobs.humans : DATA.arenaMobs.creatures,
            starts = [
                [{x: 1, y: 1}, {x: 3, y: 1}],
                [{x: 1, y: 1}, {x: 3, y: 1}, {x: 2, y: 2}],
                [{x: 1, y: 1}, {x: 3, y: 1}, {x: 2, y: 2}, {x: 2, y: 4}]
            ];


        for(var i=0; i<numberOfMobs; i++) {
            lvl.mobs[0].push({
                id: choices[Math.floor(Math.random()*choices.length)],
                start: starts[numberOfMobs - 2][i]
            });
        }

        return lvl;
    }

    function tileClicked(sprite) {

        var x = grid(sprite.position.x),
            y = grid(sprite.position.y),
            bt = PG.brinley.tile;

        try {
            var g = new PF.Grid(5, 9, getLevelMatrix(mobs)),
                finder = new PF.AStarFinder({allowDiagonal: true}),
                path,
                ok;
        } catch(e) {
            return;
        }

        path = finder.findPath(bt.x, bt.y, x, y, g);

        try {
            PG.game.add.tween(brinleySprite).to({
                x: pos(path[1][0]), 
                y: pos(path[1][1])
            }, 200, Phaser.Easing.Exponential.Out, true);

            //fade in old tile
            flashMovementTile(movementTiles, PG.brinley.tile, 1);

            //set brinley tile
            PG.brinley.tile = {x: path[1][0], y: path[1][1]};

            //fade out new tile
            flashMovementTile(movementTiles, PG.brinley.tile, 0.3);


        } catch(e) {}
    }

    function createWave() {
        var mobSprite,
            mob;

        mobs = [];

        //loop through mobs in wave
        for(var i=0; i<PG.level.mobs[wave].length; i++) {
            mob = PG.level.mobs[wave][i];
            mobSprite = addSprite(pos(mob.start.x), pos(mob.start.y), 'mobs', mob.id);
            mobSprite.inputEnabled = true;
            mobSprite.events.onInputDown.add(swing, that);
            mobSprite.id = i;

            //tentacle directions
            if(mob.id == 'tentacle.png') {
                mobSprite.scale.x = Math.random() > 0.5 ? 0.5 : -0.5;
            }

            mobs.push({
                num: i,
                tile: {x: mob.start.x, y: mob.start.y},
                data: Factory.Mob(mob.id, PG.brinley.level),
                sprite: mobSprite
            });
        }

        //fade in mob
        PG.game.add.tween(mobSprite).to({
            alpha: 1
        }, 500, Phaser.Easing.Linear.None, true);

        mobsKilled = 0;
        PG._mobs = PG.Mobs(that, mobs, movementTiles);
    }

    function swing(sprite) {
        //nope if not ready
        if(!swingReady) return;

        //time between swings
        var swordTime = 1666 - Math.min((PG.brinley.sword / 60) * 1400, 1400);

        var mob,
            mobX,
            mobY,
            bt = PG.brinley.tile;

        //get the mob
        for(var i=0; i<mobs.length; i++) {
            if(sprite.id == mobs[i].sprite.id) mob = mobs[i];
        }

        //if brinley is next to mob
        mobX = grid(mob.sprite.position.x);
        mobY = grid(mob.sprite.position.y);

        if(nextTo({x:mobX, y:mobY}, bt)) {
            //set swing timer
            swingReady = false;
            swingTimer = window.setTimeout(function() {
                swingReady = true;
            }, swordTime);

            //start sword stat spin
            swordStatSprite.alpha = 0.5;
            PG.game.add.tween(swordStatSprite).to({
                angle: 360 
            }, swordTime, Phaser.Easing.Linear.None, true);

            setTimeout(function() {
                swordStatSprite.alpha = 1;
            }, swordTime);

            var deltaX = mobX - bt.x,
                deltaY = mobY - bt.y;
                angle = Math.atan2(deltaY, deltaX) * 180 / Math.PI + 90;

            //sword
            var swordSprite = addSprite(brinleySprite.position.x, brinleySprite.position.y, 'items', 'sword1.png');
            swordSprite.alpha = 0;
            swordSprite.angle = angle;

            //stab
            PG.game.add.tween(swordSprite).to({
                x: mob.sprite.position.x, 
                y: mob.sprite.position.y,
                alpha: 1
            }, 100, Phaser.Easing.Exponential.In, true);

            //withdraw
            setTimeout(function() {
                damageMob(mob, 1 + Math.ceil(PG.brinley.strength * 0.75));

                PG.game.add.tween(swordSprite).to({
                    x: brinleySprite.position.x, 
                    y: brinleySprite.position.y
                }, 200, Phaser.Easing.Exponential.Out, true);
            }, 200);

            setTimeout(function() {
                PG.game.add.tween(swordSprite).to({
                    alpha: 0
                }, 200, Phaser.Easing.Linear.None, true);
            }, 400);

            setTimeout(function() {
                swordSprite.destroy();
            }, 600);
        }
    }

    function damageMob(mob, damage) {
        //only inf brinley is alive
        if(PG.brinley.life <= 0) return;

        //do damage
        mob.data.life -= damage;

        addBlood(mob.sprite);

        //check if dead
        if(mob.data.life <= 0) {
            flashMovementTile(movementTiles, mob.tile, 1);
            flickerOut(mob.sprite, mobKilled);

            if(mob.data.id == 'young-demon.png') {
                //if boss was killed, kill its tentacles
                for(var i=0; i<mobs.length; i++) {
                    if(mobs[i].data.life > 0) {
                        damageMob(mobs[i], 10000);
                    }
                }
            }
        }

        //boss lifebar
        if(mob.data.id == 'young-demon.png') {
            var maxLife = (mob.data.lifeMod * 10) + Math.floor(66 * mob.data.lifeMod),
                wide = Math.max(0, (mob.data.life / maxLife) * (PG.tileSize*4));

            mob.sprite.isBoss = true;

            PG.bossbar.clear();
            PG.bossbar.beginFill(0x4e4a68, 1);
            PG.bossbar.drawRect(0, 0, wide, PG.half*0.2);
        }
    }

    function mobKilled(mobSprite) {
        var numWaves = PG.level.mobs.length;

        mobSprite.destroy();
        mobsKilled++;

        //if that was the last mob
        if(mobsKilled >= mobs.length || mobSprite.isBoss) {
            wave++;
            setTimeout(function() {
                if(wave < numWaves) {
                    createWave();
                } else {
                    PG.game.state.start('Pause');
                    if(PG.level.id == 'boss') {
                        //show last story
                        PG.bossDead = true;
                        PG.Story.init();
                    } else if(PG.level.id == 'priest') {
                        PG.priestDead = true;
                        PG.Story.init();
                    } else {
                        //show points
                        PG.Points.init();
                    }
                }
            }, 1000);
        }
    }

    var brinDown,
        powerBonus,
        bonusTimer,
        shieldTimer,
        aws,
        ms,
        aX,
        aY,
        downX,
        downY,
        arrows = [];

    function brinleyDown() {
        var powerupWidth = 0,
            maxPowerBonus = 0.03 * PG.brinley.strength * 50, //0.03 power, 50 ticks
            maxWidth = (PG.game.width - PG.tileSize - PG.holder.position.x*2);

        brinDown = true;
        downX = (PG.game.input.x - PG.holder.position.x);
        downY = (PG.game.input.y - PG.holder.position.y);

        window.clearTimeout(shieldTimer);
        shieldTimer = window.setTimeout(function() {
            if(brinDown == true) {
                powerBonus = 0;
                //max power bonus is 3 * normal damage
                //5000ms is max bonus buildup time
                bonusTimer = window.setInterval(function() {
                    powerBonus = powerBonus < maxPowerBonus ? powerBonus + maxPowerBonus / 50 : maxPowerBonus;
                    powerupWidth = Math.min(maxWidth, powerupWidth + maxWidth / 50);
                    PG.powerup.clear();
                    PG.powerup.beginFill(0xffffff, 1);
                    PG.powerup.drawRect(0, 0, powerupWidth, PG.half*0.1);
                }, 100);
                if(!PG.shielding) doShield();
            }
            brinDown = false;
        }, 600);
    }

    function gameUp() {
        
        var dX = downX - (PG.game.input.x - PG.holder.position.x),
            dY = downY - (PG.game.input.y - PG.holder.position.y);

        distance = Math.sqrt(dX*dX + dY*dY);

        if(brinDown && distance > 30) {
            var allClear = true;

            //check if mob is nexto brinley
            for(var i=0; i<mobs.length; i++) {
                if(mobs[i].data.life > 0) {
                    if(nextTo(mobs[i].tile, PG.brinley.tile)) {
                        allClear = false;
                        break;
                    }
                }
            }
            
            //dont shoot if not ready, or next to mob
            if(shootReady && allClear) {
                var arrow = {
                    deltaX: (PG.game.input.x - PG.holder.position.x) - brinleySprite.position.x,
                    deltaY: (PG.game.input.y - PG.holder.position.y) - brinleySprite.position.y
                };

                //delay between arrows
                var arrowTime = 1666 - Math.min((PG.brinley.bow / 60) * 1400, 1400);

                //set shoot timer
                shootReady = false;
                shootTimer = window.setTimeout(function() {
                    shootReady = true;
                }, arrowTime);

                //start arrow stat spin
                arrowStatSprite.alpha = 0.5;
                PG.game.add.tween(arrowStatSprite).to({
                    angle: 360 
                }, arrowTime, Phaser.Easing.Linear.None, true);

                setTimeout(function() {
                    arrowStatSprite.alpha = 1;
                }, arrowTime);

                arrow.angle = Math.atan2(arrow.deltaY, arrow.deltaX) * 180 / Math.PI;
                arrow.origin = {x: brinleySprite.position.x, y: brinleySprite.position.y}
                arrow.sprite = addSprite(arrow.origin.x, arrow.origin.y, 'items', 'arrow1.png');
                arrow.sprite.angle = arrow.angle + 90;
                arrow.damage = 1 + Math.ceil(PG.brinley.precision * 0.75);
                arrow.shooter = 'brinley';
                arrows.push(arrow);
            }
        } else {
            if(PG.shielding) powerStrike();
        }
        
        brinDown = false;
        PG.shielding = false;

        window.clearInterval(bonusTimer);
        PG.powerup.clear();

        try {
            PG.shield.clear();
        } catch(e) {}
    }

    function doShield() {
        var diam = {step: 1};
        PG.shielding = true;
        PG.shield = PG.game.add.graphics(PG.brinleySprite.position.x, PG.brinleySprite.position.y, PG.holder);

        PG.game.add.tween(diam).to({step: 2*(PG.tileSize * 1.6)}, 200, Phaser.Easing.Exponential.Out, true).onUpdateCallback(function() {
            PG.shield.clear();
            if(PG.shielding) {
                PG.shield.scale.setTo(0.5, 0.5);
                PG.shield.lineStyle(16, 0xfafafa);
                PG.shield.drawCircle(0, 0, diam.step);
                PG.shield.lineStyle(8, 0x666666);
                PG.shield.drawCircle(0, 0, diam.step - 36);
            }
        });
    }

    function powerStrike() {
        if(PG.brinley.life <= 0) return;

        PG.shielding = false;
        PG.shield.clear();
        window.clearInterval(bonusTimer);

        var bt = PG.brinley.tile,
            nearTiles = [
                {x:bt.x, y:bt.y-1},
                {x:bt.x-1, y:bt.y-1},
                {x:bt.x-1, y:bt.y},
                {x:bt.x-1, y:bt.y+1},
                {x:bt.x, y:bt.y+1},
                {x:bt.x+1, y:bt.y+1},
                {x:bt.x+1, y:bt.y},
                {x:bt.x+1, y:bt.y-1}
            ];

        for(var i=0; i<8; i++) {
            var hit = false;
            for(var j=0; j<mobs.length; j++) {
                if(mobs[j].tile.x == nearTiles[i].x && mobs[j].tile.y == nearTiles[i].y) {
                    if(mobs[j].data.life > 0) {
                        //hit this mob
                        hit = mobs[j];
                    }
                }
            }
            powerSword(i, nearTiles[i], hit);
        }

        powerBonus = 0;
    }

    function powerSword(i, tile, mob) {
        var swordSprite,
            //bonus maxes at 4 times brinleys strength
            damage = 1 + PG.brinley.strength + Math.min(powerBonus, PG.brinley.strength * 3);

        setTimeout(function() {
            swordSprite = addSprite(PG.brinleySprite.position.x, PG.brinleySprite.position.y, 'items', 'sword1.png');
            swordSprite.alpha = 0;
            swordSprite.angle = i * -45;

            if(mob) {
                addBlood(mob.sprite);
                damageMob(mob, damage);
            }

            //stab
            PG.game.add.tween(swordSprite).to({
                x: pos(tile.x), 
                y: pos(tile.y),
                alpha: 1
            }, 140, Phaser.Easing.Exponential.In, true);
        }, i*66);
        setTimeout(function() {
            PG.game.add.tween(swordSprite).to({
                alpha: 0
            }, 166, Phaser.Easing.Exponential.In, true);
        }, 140+i*66);
    }

    return {
        damageMob: damageMob,
        update: function() {
            moveArrow(tiles, arrows, mobs);
            moveDust(particles, dust, dustColor);
            PG._mobs.update();
        },
        shutdown: function() {
            window.clearInterval(shieldTimer);
            window.clearInterval(dustTimer);
            PG._mobs.shutdown();
        }
    }
};

PG.combatSpecial = function(level, mobs) {
    if(level == 1) {
        var priest = addSprite(pos(3), pos(4), 'mobs', 'priest.png');
        setTimeout(function() {
            PG.game.add.tween(priest).to({x: pos(5)}, 900, Phaser.Easing.Linear.None, true);
        }, 800);
        setTimeout(function() {
            priest.destroy();
        }, 1700);
    }
    if(level == 10) {
        var priest = addSprite(pos(4), pos(0), 'mobs', 'priest.png');
    }
    //lvl 29 up by create wave (guard stomp)
};

PG.Mobs = function(that, mobs, movementTiles) {
    var arrows = []
        tiles = PG.level.arena;

    //random start time for mobs
    for(var i=0; i<mobs.length; i++) {
        act(mobs[i]);
    }

    function act(mob) {
        try {
            window.clearTimeout(mob.attackTimer);
        } catch(e){}
        try {
            window.clearTimeout(mob.moveTimer);
        } catch(e){}

        //if mob or brinley dead, stop acting
        if(mob.data.life <= 0 || PG.brinley.life <= 0) return;
        
        setTimeout(function() {
            //is the mob next to brinley
            if(nextTo(mob.tile, PG.brinley.tile)) {
                //attack
                melee(mob);
            } else {
                if(mob.data.ranged) {
                    //check for shoot
                    shoot(mob);
                } else {
                    //move
                    checkMove(mob);
                }
            }
        }, 200 + Math.random()*800);
    }

    function checkMove(mob) {
        if(mob.data.life <= 0) return;
        //if they move at all
        if(Math.random() < mob.data.initiative) {
            //check for type??
            mob.moveTimer = setTimeout(function(){
                if(mob.data.id == 'tentacle.png') {
                    mob.sprite.scale.x = mob.sprite.scale.x * -1;
                } else if (Math.random() < 0.8) {
                    //move towards brinley
                    moveTowardsBrinley(mob);
                } else {
                    //move randomly
                    moveRandomly(mob);
                }
                //if they move towards brinley or randomly

                act(mob);
            }, mob.data.moveSpeed);
        } else {
            //no action, act again
            act(mob);
        }
    }

    function moveTowardsBrinley(mob) {
        if(mob.data.life <= 0) return;

        var grid = new PF.Grid(5, 9, getLevelMatrix(mobs)),
            finder = new PF.AStarFinder({allowDiagonal: true}),
            path,
            ok;

        path = finder.findPath(mob.tile.x, mob.tile.y, PG.brinley.tile.x, PG.brinley.tile.y, grid);
        //remove last tile, where brinly is standing
        path.pop();

        try {
            PG.game.add.tween(mob.sprite).to({
                x: pos(path[1][0]), 
                y: pos(path[1][1])
            }, 200, Phaser.Easing.Exponential.Out, true);
            
            //fade in old tile
            flashMovementTile(movementTiles, mob.tile, 1);

            mob.tile = {x: path[1][0], y: path[1][1]};

            //fade out new tile
            flashMovementTile(movementTiles, mob.tile, 0.3);
        } catch(e) {}
    }

    function moveRandomly(mob) {
        if(mob.data.life <= 0) return;
        var choosing = true,
            allMobsClear,
            arrows = [],
            newX,
            newY,
            count = 0,
            limit = 6;

        //phew!
        while(choosing && count < limit) {
            var t = Math.floor(Math.random()*8),
                nearTiles = [
                    {x:mob.tile.x-1, y:mob.tile.y-1},
                    {x:mob.tile.x-1, y:mob.tile.y},
                    {x:mob.tile.x-1, y:mob.tile.y+1},
                    {x:mob.tile.x, y:mob.tile.y+1},
                    {x:mob.tile.x+1, y:mob.tile.y+1},
                    {x:mob.tile.x+1, y:mob.tile.y},
                    {x:mob.tile.x+1, y:mob.tile.y-1},
                    {x:mob.tile.x, y:mob.tile.y-1}
                ],
                newX = nearTiles[t].x,
                newY = nearTiles[t].y;

            allMobsClear = true;

            //check if new tile is on the board
            if(newX > -1 && newY > -1 && newX < 5 && newY < 9) {
                //check if new tile is walkable
                if(tiles[newY][newX].w) {
                    //check if tile is unoccupied
                    for(var i=0; i<mobs.length; i++) {
                        //alive mobs only
                        if(mobs[i].data.life > 0) {
                            //if on a mob
                            if(mobs[i].tile.x == newX && mobs[i].tile.y == newY) {
                                allMobsClear = false;
                            }
                            //brinley
                            if(PG.brinley.tile.x == newX && PG.brinley.tile.y == newY) {
                                allMobsClear = false;
                            }
                        }
                    }
                    if(allMobsClear) {
                        choosing = false;
                    }
                }
            }
            count++;
        }

        if(!choosing) {
            PG.game.add.tween(mob.sprite).to({x: pos(newX), y: pos(newY)}, 200, Phaser.Easing.Exponential.Out, true);

            //fade in old tile
            flashMovementTile(movementTiles, mob.tile, 1);

            mob.tile = {x: newX, y: newY};

            //fade out new tile
            flashMovementTile(movementTiles, mob.tile, 0.3);
        }
    }

    function shoot(mob) {
        window.clearTimeout(mob.attackTimer);
        window.clearTimeout(mob.shootTimer);
        mob.shootTimer = setTimeout(function() {
            //get path to brinley
            var bt = PG.brinleySprite.position,
                deltaX = bt.x - mob.sprite.position.x,
                deltaY = bt.y - mob.sprite.position.y,
                angle = Math.atan2(deltaY, deltaX) * 180 / Math.PI,
                pX = mob.sprite.position.x,
                pY = mob.sprite.position.y,
                okToShoot = true;

            //check up to 20 tiles in that direction for mobs or obstacles
            for(var i=0; i<20; i++) {
                pX += Math.cos(angle*(Math.PI/180)) * PG.half;
                pY += Math.sin(angle*(Math.PI/180)) * PG.half;
                tileX = Math.min(4, grid(pX));
                tileY = Math.min(8, grid(pY));
                
                //walkable
                if(!tiles[tileY][tileX].w) {
                    okToShoot = false;
                    break;
                }
                //mobs
                for(var j=0; j<mobs.length; j++) {
                    if(mobs[j].data.life > 0) {
                        
                        if(mobs[j].tile.x == tileX && mobs[j].tile.y == tileY) {
                            //cant shoot self
                            if(mobs[j].id != mob.id) {
                                okToShoot = false;
                                break;
                            }
                        }
                    }
                }
                if(PG.brinley.tile.x == tileX && PG.brinley.tile.y == tileY) {
                    break;
                }
            }

            if(okToShoot && mob.data.life > 0) {
                //loose!
                var arrow = {};
                arrow.angle = angle;

                if(Math.random() < 0.35) {
                    //add some aiming issues to mob shots half the time
                    arrow.angle += -15 + Math.random()*30;
                }

                arrow.origin = {x: mob.sprite.position.x, y: mob.sprite.position.y};
                arrow.sprite = addSprite(arrow.origin.x, arrow.origin.y, 'items', mob.data.rangedSprite);
                arrow.sprite.angle = arrow.angle + 90;
                arrow.damage = Math.ceil(mob.data.damage / 2);
                arrow.shooter = mob.num;
                arrows.push(arrow);
                act(mob);
            } else {
                checkMove(mob);
            }
        }, mob.data.attackSpeed);
    }

    function melee(mob) {
        window.clearTimeout(mob.attackTimer);
        window.clearTimeout(mob.shootTimer);
        mob.attackTimer = setTimeout(function() {
            if(mob.data.life <= 0 || !nextTo(mob.tile, PG.brinley.tile)){
                act(mob);
                return;
            }
            var bt = PG.brinley.tile,
                mobLoc = mob.sprite.position,
                hitSprite;

            var deltaX = bt.x - mob.tile.x,
                deltaY = bt.y - mob.tile.y;
                angle = Math.atan2(deltaY, deltaX) * 180 / Math.PI + 90;

            if(mob.data.hitter) {
                //use hitter sprite
                hitSprite = addSprite(mobLoc.x, mobLoc.y, 'items', mob.data.hitter);
                hitSprite.alpha = 0;
                hitSprite.angle = angle;
            } else {
                //use mob sprite
                hitSprite = addSprite(mobLoc.x, mobLoc.y, 'mobs', mob.data.id);
                mob.sprite.alpha = 0;
            }

            //if brinley is still kickin
            if(PG.brinley.life > 0) {

                //stab
                PG.game.add.tween(hitSprite).to({
                    x: pos(PG.brinley.tile.x),
                    y: pos(PG.brinley.tile.y),
                    alpha: 1
                }, 100, Phaser.Easing.Exponential.In, true);

                //withdraw
                setTimeout(function() {
                    damageBrinley(mob.data.damage);

                    PG.game.add.tween(hitSprite).to({
                        x: mobLoc.x, 
                        y: mobLoc.y
                    }, 200, Phaser.Easing.Exponential.Out, true);
                }, 200);

                //fade out hitter
                if(mob.data.hitter) {
                    setTimeout(function() {
                        PG.game.add.tween(hitSprite).to({
                            alpha: 0
                        }, 200, Phaser.Easing.Linear.None, true);
                    }, 400);
                }
                //destroy hitter
                setTimeout(function() {
                    hitSprite.destroy();
                    mob.sprite.alpha = 1;
                }, 600);
            }

            act(mob);
        }, mob.data.attackSpeed);
    }

    function damageBrinley(damage) {
        //make brinley invulnrable if all mobs are dead
        var okToDamage = false;
        for(var i=0; i<mobs.length; i++) {
            if(mobs[i].data.life > 0) {
                okToDamage = true;
            }
        }
        if(!okToDamage || PG.brinley.life <= 0) return;

        //shielding calc
        var block = Math.min(0.8, 0.25 + (PG.brinley.defense * 0.016));
        //damage calc
        if(PG.shielding) {
            damage = damage - (damage * block);
            PG.shield.alpha = 0.4;
            setTimeout(function() {
                PG.shield.alpha = 1;
            }, 100);
        }

        //lifebar
        updateLifebar(PG.brinley.life, PG.brinley.life - Math.max(damage, 2));

        //minimum damage dealth through shield is 2
        PG.brinley.life -= Math.max(damage, 2);
        addBlood(PG.brinleySprite);
        
        if(PG.brinley.life <= 0) {
            addBlood(PG.brinleySprite);
            addBlood(PG.brinleySprite);
            addBlood(PG.brinleySprite);
            addBlood(PG.brinleySprite);
            addBlood(PG.brinleySprite);

            //check if boss killed brinley
            if(PG.boss) {
                PG.boss = false;
            }

            //in these levels, increase brinley level
            if(PG.brinley.level == 33 || PG.brinley.level == 34) {
                PG.brinley.level++;
            }

            flickerOut(PG.brinleySprite, function() {
                setTimeout(function() {
                    PG.game.state.start('Pause');
                    PG.Death.init();
                }, 2000);
            });
        }
    }

    return {
        damageBrinley: damageBrinley,
        update: function() {
            if(arrows.length) moveArrow(tiles, arrows, mobs, true);
        },
        shutdown: function() {
            
        }
    }
};


PG.Pause = function(game) {};
PG.Pause.prototype = {
    preload: function() {},
    create: function() {},
    update: function() {
        this.game.paused = true;
    }
};


