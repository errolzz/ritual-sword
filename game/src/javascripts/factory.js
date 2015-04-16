
var Factory = {};

Factory.Brinley = function() {
    return {
        level: 0,
        life: 100,
        sword: 1,
        strength: 1,
        bow: 1,
        precision: 1,
        defense: 1,
        fresh: false
    };
};

Factory.Mob = function(id, lvl) {
    var mobDef;
    for(var i=0; i<DATA.mobs.length; i++) {
        if(DATA.mobs[i].id == id) {
            mobDef = DATA.mobs[i];

            break;
        }
    }
    
    //set boss to level 76
    if(id == 'young-demon.png') {
        lvl = 66;
    }

    var mob = {
        id: mobDef.id,
        life: (mobDef.life * 10) + Math.floor(lvl * mobDef.life),
        lifeMod: mobDef.life,
        damage: (mobDef.damage * 10) + Math.floor(lvl * mobDef.damage),
        initiative: mobDef.initiative,
        type: mobDef.type,
        ranged: mobDef.ranged,
        rangedSprite: mobDef.rangedSprite,
        moveSpeed: mobDef.moveSpeed,
        attackSpeed: mobDef.attackSpeed,
        initiative: mobDef.initiative,
        hitter: mobDef.hitter
    }

    return mob;
}