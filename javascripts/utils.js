
function flashMovementTile(tiles, bt, alpha) {
    PG.game.add.tween(tiles[bt.y][bt.x]).to({
        alpha: alpha
    }, 500, Phaser.Easing.Linear.None, true);
}


function getLevelMatrix(mobs) {
    var m = [],
        numMobs = mobs.length,
        i, j, k;

    //redo level matrix to incude mob 
    for(i=0; i<9; i++) {
        m[i] = [];
        for(j=0; j<5; j++) {
            if(PG.level.matrix[i][j] == 1) {
                //unwalkable tiles remain unwalkable
                m[i][j] = 1;
            } else {
                //walkable tiles might have mobs
                for(k=0; k<numMobs; k++) {
                    if(mobs[k].data.life > 0) {
                        //if tile has a mob
                        if(mobs[k].tile.x == j && mobs[k].tile.y == i) {
                            m[i][j] = 1;
                            break;
                        } else {
                            m[i][j] = 0;
                        }
                    }
                }
            }
        }
    }
    return m;
}


function addBlood(sprite) {
    var bloodId = 'blood' + Math.ceil(Math.random()*4) + '.png',
        bloodX = sprite.position.x - PG.half + (Math.random()*PG.tileSize),
        bloodY = sprite.position.y - PG.half + (Math.random()*PG.tileSize),
        bloodSprite;

    bloodSprite = addSprite(bloodX, bloodY, 'items', bloodId);
    bloodSprite.angle = Math.random()*360;

    PG.game.add.tween(bloodSprite).to({
        angle: bloodSprite.angle + 90
    }, 500, Phaser.Easing.Linear.None, true);
    PG.game.add.tween(bloodSprite.scale).to({
        x: PG.tileScale,
        y: PG.tileScale
    }, 200, Phaser.Easing.Exponential.Out, true);
    setTimeout(function() {
        PG.game.add.tween(bloodSprite).to({
            alpha: 0
        }, 300, Phaser.Easing.Linear.None, true);
        PG.game.add.tween(bloodSprite.scale).to({
            x: 0.2,
            y: 0.2
        }, 300, Phaser.Easing.Exponential.Out, true);
    }, 200);
    setTimeout(function() {
        bloodSprite.destroy();
    }, 500);
}


function addSprite(x, y, sheet, id) {
    var sprite = PG.game.add.sprite(x, y, sheet, id, PG.holder);
    sprite.scale.setTo(PG.tileScale, PG.tileScale);
    sprite.anchor.setTo(0.5, 0.5);
    return sprite;
}


function updateLifebar(currentLife, newLife) {
    var life = {step: currentLife},
        maxLife = 100 + (PG.brinley.defense * 3);

    PG.game.add.tween(life).to({step: Math.max(newLife, 0)}, 100, Phaser.Easing.Exponential.Out, true).onUpdateCallback(function() {
        PG.lifebar.clear();
        PG.lifebar.beginFill(0xd83535, 1);
        PG.lifebar.drawRect(0, 0, (life.step / maxLife) * (PG.tileSize*4), PG.half*0.1);
        PG.lifebar.beginFill(0xa50e0e, 1);
        PG.lifebar.drawRect(0, PG.half*0.1, (life.step / maxLife) * (PG.tileSize*4), PG.half*0.08);
    });
}


function flickerOut(sprite, callback) {
    PG.game.add.tween(sprite).to({ alpha: 0.3 }, 100, Phaser.Easing.Linear.None, true);
    setTimeout(function() {
        PG.game.add.tween(sprite).to({ alpha: 0.8 }, 100, Phaser.Easing.Linear.None, true);
    }, 100);
    setTimeout(function() {
        PG.game.add.tween(sprite).to({ alpha: 0.2 }, 100, Phaser.Easing.Linear.None, true);
    }, 200);
    setTimeout(function() {
        PG.game.add.tween(sprite).to({ alpha: 0.6 }, 100, Phaser.Easing.Linear.None, true);
    }, 300);
    setTimeout(function() {
        PG.game.add.tween(sprite).to({ alpha: 0 }, 100, Phaser.Easing.Linear.None, true);
    }, 400);
    setTimeout(function() {
        callback(sprite);
    }, 500);
}


function moveDust(particles, dust, dustColor) {
    var i;

    dust.clear();
    dust.beginFill(dustColor);

    for(i=0; i<particles.length; i++) {
        particles[i].x = particles[i].x + Math.cos(particles[i].angle*(Math.PI/180)) * particles[i].speed;
        particles[i].y = particles[i].y + Math.sin(particles[i].angle*(Math.PI/180)) * particles[i].speed;
        
        dust.drawCircle(particles[i].x, particles[i].y, particles[i].radius);

        if(particles[i].startX < 0 && particles[i].x >= particles[i].endX) {
            particles.splice(i, 1);
        } else if(particles[i].startX > 0 && particles[i].x <= particles[i].endX) {
            particles.splice(i, 1);
        }
    }
}


function moveArrow(tiles, arrows, mobs, brinley) {
    var aws, ms, aX, aY

    for(aws=0; aws<arrows.length; aws++) {
        arrows[aws].sprite.position.x += Math.cos(arrows[aws].angle*(Math.PI/180)) * 30;
        arrows[aws].sprite.position.y += Math.sin(arrows[aws].angle*(Math.PI/180)) * 30;

        if(!arrows[aws].sprite.inWorld) {
            arrows[aws].sprite.destroy();
            arrows.splice(aws, 1);
        } else {
            try {
                //get tile
                aX = grid(arrows[aws].sprite.position.x);
                aY = grid(arrows[aws].sprite.position.y)
                arrows[aws].tile = tiles[aY][aX];
            } catch(e) {}

            if(arrows[aws].tile) {
                if(!arrows[aws].tile.w) {
                    arrows[aws].sprite.destroy();
                    arrows.splice(aws, 1);
                } else {
                    //check if arrow hit mob
                    for(ms=0; ms<mobs.length; ms++) {
                        if(arrows.length == 0) break;
                        if(mobs[ms].data.life > 0 && mobs[ms].num != arrows[aws].shooter) {
                            if(mobs[ms].tile.x == aX && mobs[ms].tile.y == aY) {
                                PG._combat.damageMob(mobs[ms], arrows[aws].damage);
                                arrows[aws].sprite.destroy();
                                arrows.splice(aws, 1);
                            }
                        }
                    }
                    //check if brinley was hit
                    if(brinley) {
                        if(PG.brinley.tile.x == aX && PG.brinley.tile.y == aY) {
                            PG._mobs.damageBrinley(arrows[aws].damage);
                            arrows[aws].sprite.destroy();
                            arrows.splice(aws, 1);
                        }
                    }
                }
            } else {
                arrows[aws].sprite.destroy();
                arrows.splice(aws, 1);
            }
        }
    }
}


function nextTo(p1, p2) {
    if(p1.x == p2.x || p1.x == p2.x + 1 || p1.x == p2.x - 1) {
        if(p1.y == p2.y || p1.y == p2.y - 1 || p1.y == p2.y + 1) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}


function pos(p) {
    return p * PG.tileSize + PG.half;
}


function grid(p) {
    return Math.max(0, Math.floor(p / PG.tileSize));
}


function save() {
    localStorage.setItem('saved_brinleys', JSON.stringify(DATA.brinleys));
}