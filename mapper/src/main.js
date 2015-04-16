
var tiles = [],
    tileSize = 60,
    currentTile,
    currentTileId = undefined,
    rotation = 0,
    c,
    ctx,
    pctx,
    mapSizes = [
        {width: 5, height: 9},
        {width: 19, height: 33},
        {width: 27, height: 49}
    ];

//on ready, wait for map size selection
$(document).ready(function() {
    c = $('#can');
    ctx = c[0].getContext('2d');
    pctx = $('#preview')[0].getContext('2d');

    createTiles();

    //listeners
    $('#map-size').click(function(e) {
        var size = $(e.target).index();
        drawCanvasGrid(size);
        createTileData(size);
    });
    $('#can').mousedown(mapDown);
    $('#can').mouseup(mapUp);

    $('#toggle').click(function() {
        $('#drawer').show();
    });
    $('#drawer').click(function(e) {
        var t = $(e.target).closest('li');
        if(t.hasClass('tile')) {
            rotation = 0;
            ctx.restore();
            pctx.restore();
            ctx.save();
            pctx.save();
            
            pctx.clearRect(0, 0, 50, 50);
            pctx.translate(25, 25);

            currentTileId = t.attr('id');
            currentTile = data.filter(function(item) {
                return item.id == currentTileId;
            })[0];

            pctx.drawImage(currentTile.img, -25, -25, 50, 50);
        }
        $('#drawer').hide();
    });
    $('#print').click(printMap);
    $('#rotate').click(rotateTile);
});

function createTiles() {
    var item, img;
    for (var i = data.length - 1; i >= 0; i--) {
        item = $('<li id="'+data[i].id+'" class="tile"></li>');
        img = $('<img src="img/'+data[i].id+'.png" width="50" height="50" />');
        item.append(img);
        $('#drawer ul').append(item);
    };
}


function drawCanvasGrid(size) {
    var w = mapSizes[size].width * tileSize * 2,
        h = mapSizes[size].height * tileSize * 2

    c.css({
        width: w / 2 + 'px',
        height: h / 2 + 'px'
    });

    c.attr({
        width: w,
        height: h
    });

    ctx.scale(2, 2);
    ctx.clearRect(0, 0, w, h);
    ctx.fillStyle = 'rgb(0,0,0)';
    //ctx.fillStyle = 'rgb(200,200,200)';

    for(var i=0; i<mapSizes[size].height; i++) {
        //create a row lines    
        ctx.fillRect(0, i*tileSize, w, 1);
    }
    for(var j=0; j<mapSizes[size].width; j++) {
        //add tile to row
        ctx.fillRect(j*tileSize, 0, 1, h);
    }
}

function createTileData(size) {
    tiles = [];
    //create tile data
    for(var i=0; i<mapSizes[size].height; i++) {
        //create a row
        var r = [];
        for(var j=0; j<mapSizes[size].width; j++) {
            r.push({
                id: '',
                rot: '',
                w: ''
            });
        }
        tiles.push(r);
    }
}

function mapDown() {
    $(window).on('mousemove', paintTile);
}

function mapUp(e) {
    $(window).off('mousemove', paintTile);
    paintTile(e);
}

function paintTile(e) {
    //check if tile is selected
    if(!currentTileId) return;

    //get point clicked
    var x = e.pageX - 100,
        y = e.pageY - 196;

    //get tile clicked
    var col = Math.floor(x / tileSize),
        row = Math.floor(y / tileSize);

    ctx.restore();
    ctx.save();
    ctx.translate(col * tileSize + (tileSize/2), row * tileSize + (tileSize/2));
    ctx.rotate(Math.PI/180 * rotation);

    tiles[row][col].id = currentTileId;
    tiles[row][col].rot = rotation;
    tiles[row][col].w = currentTileId.indexOf('w-') > -1 ? true : false;
    
    ctx.drawImage(currentTile.img, (tileSize/-2), (tileSize/-2), tileSize, tileSize);
}

function rotateTile() {
    if(rotation < 270) {
        rotation += 90;
    } else {
        rotation = 0;
    }

    //update preview
    pctx.clearRect(-25, -25, 50, 50);
    pctx.rotate(Math.PI/180 * 90);
    pctx.drawImage(currentTile.img, -25, -25, 50, 50);
}


function printMap() {
    console.log(JSON.stringify(tiles));
}

var loaded = 0;
function loadNext() {
    if(loaded < data.length) {
        loadImage(data[loaded].id);
    }
}

function loadImage(f) {
    var img = new Image();
    img.addEventListener('load', function() {
        data[loaded].img = img;
        loaded++;
        loadNext();
    }, false);
    img.src = 'img/'+f+'.png';
}


loadNext();