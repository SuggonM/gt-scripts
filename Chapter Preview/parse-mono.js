const fs = require('fs');
const mono = require('./Chapter Preview-MonoBehaviour.json');

const atlas = new Object();
atlas.frames = [];
atlas.meta = {};
atlas.meta.image = "Chapter Preview.png";
atlas.meta.size = {};
atlas.meta.size.w = 1024;
atlas.meta.size.h = 2048;

let i = 0;
mono.mSprites.forEach((sprite) => {
    atlas.frames[i] = {};
    atlas.frames[i].filename = sprite.name + ".png";
    atlas.frames[i].frame = {};
    atlas.frames[i].frame.x = sprite.x;
    atlas.frames[i].frame.y = sprite.y;
    atlas.frames[i].frame.w = sprite.width;
    atlas.frames[i].frame.h = sprite.height;
    atlas.frames[i].spriteSourceSize = {};
    i++;
});

fs.writeFileSync('Chapter Preview.json', JSON.stringify(atlas, null, '	'));
