
var limitLines = false;
var hideTutorial = false;
//limitLines = true;
//hideTutorial = true;
//var tap = 'mousedown';
var tap = 'touchstart';



//PGAME
var PG = {
    slot: undefined,
    brinley: undefined,
    storyMode: undefined,
    boss: undefined
};

//init
PG.init = function() {
    var $w = $(window);
    //set game and screen size
    PG.game = new Phaser.Game($w.width() * window.devicePixelRatio, $w.height() * window.devicePixelRatio, Phaser.AUTO, 'arena');
    
    //save sizes
    PG.tileSize = Math.floor(Math.min($w.width() / 5, $w.height() / 9.5)) * window.devicePixelRatio;
    PG.half = PG.tileSize / 2;
    PG.tileScale = PG.tileSize / 256;

    //adding all the required states
    PG.game.state.add('Boot', PG.Boot);
    PG.game.state.add('Preloader', PG.Preloader);
    PG.game.state.add('Arena', PG.Arena);
    PG.game.state.add('Pause', PG.Pause);

    //starting the boot state
    PG.game.state.start('Boot');
};



PG.Boot = function(game) {};
PG.Boot.prototype = {

    preload: function() {},

    create: function() {
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.scale.setScreenSize(true);
        this.state.start('Preloader');
    }
};




//init
PG.Preloader = function(game) {};
PG.Preloader.prototype = {

    preload: function() {
        //load saved data

        //load images
        this.game.load.atlasJSONArray('wenv', 'images/w-env-sprites.png', 'images/w-env-data.json');
        this.game.load.atlasJSONArray('oenv', 'images/o-env-sprites.png', 'images/o-env-data.json');
        this.game.load.atlasJSONArray('mobs', 'images/mobs-sprites.png', 'images/mobs-data.json');
        this.game.load.atlasJSONArray('items', 'images/items-sprites.png', 'images/items-data.json');
    },

    create: function() {},

    update: function() {
        this.game.paused = true;
        PG.Menu.init();
    }
};

//Menu
PG.Menu = (function() {
    var that = this,
        selected = 0,
        saved,
        $menu = $('#menu'),
        $play = $('#play'),
        $clear = $('#clear');

    function init() {
        
        PG.currentLevel = undefined;

        //show menu
        setMenuItems();
        $menu.show();
        checkSelectedChar(0);

        //listen for game selection
        $('#menu ul').on(tap, 'li', function(e) {
            var $t = $(e.target).closest('li');
            $('#menu li').removeClass('selected');
            $t.addClass('selected');

            selected = $t.index();
            checkSelectedChar();
        });

        $play.on(tap, playClicked);
        $clear.on(tap, clearClicked);
        $('#confirm-yes').on(tap, confirmClearClicked);
        $('#confirm-no').on(tap, cancelClear);
    }

    function setMenuItems() {
        //get saved brinleys
        saved = JSON.parse(localStorage.getItem('saved_brinleys')) || false;

        if(saved) {
            for(var i=0; i<saved.length; i++) {
                DATA.brinleys[i] = saved[i];
            }
        }

        //set menu items
        $('#menu li').each(function(i) {
            if(DATA.brinleys[i].fresh) {
                $(this).find('p').text('Game ' + (i+1) + ' [New]');    
            } else {
                $(this).find('p').text('Game ' + (i+1) + ' [Level ' + (DATA.brinleys[i].level + 1) + ']');
            }
        });
    }

    function checkSelectedChar() {
        if(DATA.brinleys[selected].fresh) {
            //new game
            $clear.hide();
        } else {
            //saved game
            $clear.show();
        }
    }

    function clearClicked() {
        $('#confirm').show();
    }

    function confirmClearClicked() {
        DATA.brinleys[selected] = {fresh: true};
        $clear.hide();
        save();
        setMenuItems();
        cancelClear();
    }

    function cancelClear() {
        $('#confirm').hide();
    }

    function playClicked() {
        if(DATA.brinleys[selected].fresh) {
            //new game
            DATA.brinleys[selected] = Factory.Brinley();
        } else {
            //saved game
            $clear.show();
        }
        //set brinley for the game
        PG.slot = selected;
        PG.brinley = DATA.brinleys[selected];

        //remove listeners
        $('#menu ul').off();
        $play.off();
        $clear.off();

        $menu.hide();

        //start story
        PG.Story.init();

    }

    return {
        init: init
    }
})();


PG.Story = (function() {
    
    var $story = $('#story'),
        $chat = $('#chat'),
        $fight = $('#fight'),
        $quit = $('#quit'),
        $challenge = $('#challenge'),
        count,
        lines,
        timer;

    function init() {
        var instant = false;
        count = 0;
        timer = window.setInterval(showLine, 1666);

        //saves brinley to local storage
        save();

        $quit.show();

        //if story mode boss fight
        if(PG.brinley.level == 33) {
            PG.boss = true;
        } else {
            PG.boss = false;
        }

        //story mode or not
        if(PG.brinley.level < 35 || PG.bossDead) {
            PG.storyMode = true;
        } else {
            PG.storyMode = false;
        }

        //if the fight button is instant or not
        if(PG.currentLevel == PG.brinley.level || !PG.storyMode) {
            instant = true;
        }
        //save current level
        PG.currentLevel = PG.brinley.level;

        if(PG.storyMode) {
            //story
            if(PG.bossDead && !PG.priestDead) {
                lines = DATA.levels[35].lines;
            } else if(PG.priestDead) {
                $quit.hide();
                $fight.hide();
                lines = DATA.levels[36].lines;
            } else {
                lines = DATA.levels[PG.brinley.level].lines;   
            }
            
            $challenge.hide();
            $fight.text('Fight');
        } else {
            //arena
            lines = [DATA.arenaLines[Math.floor(Math.random() * DATA.arenaLines.length)]];
            $challenge.fadeIn(500);
            $challenge.on(tap, challengeClicked);
            $fight.text('Arena');
        }

        $chat.empty();
        var h = $(window).height();
        $chat.css({
            height: ((h - (h*0.06)) - 66) + 'px'
        });

        $story.show();
        $fight.on(tap, fightClicked);
        $quit.on(tap, function() {
            clean();
            PG.Menu.init();
        });
        showLine();

        if(instant && !PG.priestDead) {
            $fight.fadeIn(500);
        };
    }

    function showLine() {
        var maxLines = limitLines ? 1 : lines.length;
        if(count >= maxLines) {
            window.clearInterval(timer);
            
            //if first time on level
            //show fight button after story has finished            
            $fight.fadeIn(500);

            if(PG.priestDead) {
                PG.bossDead = false;
                PG.priestDead = false;
                $fight.off();
                $fight.text('Main Menu');
                $fight.on(tap, function() {
                    clean();
                    PG.Menu.init();
                });
            }
            return;
        }
        
        //create the line html
        var $line = $('<div class="line"></div>');
        if(lines[count].icon) {
            $line.append('<img class="icon" src="images/'+lines[count].icon+'.png" alt="" width="60" height="60" />');
            if(lines[count].icon == 'brinley') {
                $line.append('<p class="brinley">\"'+lines[count].text+'\"</p>');    
            } else {
                $line.append('<p class="npc">\"'+lines[count].text+'\"</p>');
            }
        } else {
            $line.append('<p>'+lines[count].text+'</p>');
        }

        //add the html as the first item in the chat div
        $chat.append($line);

        //animate in line
        $chat.animate({scrollTop: 1800}, 600);
        $line.delay(400).animate({
            opacity: 1
        }, 600);

        count++;
    }

    function challengeClicked() {
        PG.boss = true;
        fightClicked();
    }

    function fightClicked() {
        clean();

        if(PG.brinley.level == 0 && !hideTutorial) {
            //tutorial
            PG.Tutorial.init();
        } else {
            //show arena
            PG.game.paused = false;
            PG.game.state.start('Arena');
        }
    }

    function clean() {
        window.clearInterval(timer);
        $fight.off();
        $fight.hide();
        $quit.hide();
        $quit.off();
        $challenge.off();
        $challenge.hide();
        $story.hide();
    }

    return {
        init: init
    }
})();



PG.Tutorial = (function() {
    var $tutorial = $('#tutorial'),
        $slides = $tutorial.find('.slide'),
        slide;

    function init() {
        slide = -1;
        $tutorial.show();
        $('#continue').on(tap, next);
        next();
    }

    function next() {
        if(slide < 4) {
            slide++;
            $slides.hide();
            $slides.eq(slide).show();
        } else {
            $('#continue').off();
            $tutorial.hide();
            //show arena
            PG.game.paused = false;
            PG.game.state.start('Arena');
        }
    }

    return {
        init: init
    }
})();



PG.Points = (function() {
    
    var $points = $('#points'),
        $done = $('#done'),
        remaining,
        skills;

    function init() {
        remaining = 3;
        skills = {
            sword: 0,
            strength: 0,
            bow: 0,
            precision: 0,
            defense: 0
        };

        showPoints();

        //listeners
        $('#points .plus').on(tap, addPoint);
        $('#points .minus').on(tap, removePoint);
        $done.on(tap, doneClicked);

        $done.hide();
        $points.show();
    }

    function addPoint(e) {
        if(remaining <= 0) return;
        
        var $row = $(e.target).closest('li'),
            prop = $row.find('.title').text().toLowerCase();
        
        skills[prop]++;
        remaining--;
        showPoints();

        if(remaining == 0) {
            $done.show();
        }
    }

    function removePoint(e) {
        if(remaining >= 3) return;

        var $row = $(e.target).closest('li'),
            prop = $row.find('.title').text().toLowerCase();

        if(skills[prop] > 0) {
            skills[prop]--;
            remaining++;
        }
        
        showPoints();

        if(remaining > 0) {
            $done.hide();
        }
    }

    function showPoints() {
        //get current points
        $('#points li').each(function(i) {
            var prop = $(this).find('.title').text().toLowerCase();
            $(this).find('.level').text(PG.brinley[prop] + skills[prop]);
            //check if skill is maxed
            if(prop == 'sword' || prop == 'bow') {
                if(PG.brinley[prop] + skills[prop] >= 60) {
                    $(this).find('.change').hide();
                    $(this).find('.max').show();
                }
            }
        });
        $('#remaining').text(remaining);
    }

    function doneClicked() {
        $done.off();
        $('#points .plus').off();
        $('#points .minus').off();
        $points.hide();
        
        for(var prop in skills) {
            PG.brinley[prop] += skills[prop];
        }

        //level up!
        PG.brinley.level++;
        
        //next story
        PG.Story.init();
    }

    return {
        init: init
    }
})();


PG.Death = (function() {
    function init() {
        $('#death').show();
        $('#revive').on(tap, revive);
    }

    function revive() {
        $('#death').hide();
        $('#revive').off();
        PG.Story.init();
    }

    return {
        init: init
    }
})();

