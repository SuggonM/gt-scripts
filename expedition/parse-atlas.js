const fs = require('fs');
const mono = require('./Note-MonoBehaviour.json');

const atlas = new Object();
atlas.frames = [];
atlas.meta = {};
atlas.meta.size = {};
atlas.meta.size.w = 512;
atlas.meta.size.h = 512;

let i = 0;
mono.mSprites.forEach((monoSprite) => {
    atlas.frames[i] = {};
    atlas.frames[i].filename = monoSprite.name + ".png";
    atlas.frames[i].frame = {};
    atlas.frames[i].frame.x = monoSprite.x;
    atlas.frames[i].frame.y = monoSprite.y;
    atlas.frames[i].frame.w = monoSprite.width;
    atlas.frames[i].frame.h = monoSprite.height;
    atlas.frames[i].spriteSourceSize = {};

    i++;
});

fs.writeFileSync('Note.json', JSON.stringify(atlas, null, '	'));
