const fs = require('fs');
const mb = require('./Note-MonoBehaviour.json');
const atlas = new Object();

atlas.frames = [];
atlas.meta = {};
atlas.meta.size = {};
atlas.meta.size.w = 512;
atlas.meta.size.h = 512;

let i = 0;
mb.mSprites.forEach((mbSprite) => {
    atlas.frames[i] = {};
    atlas.frames[i].filename = mbSprite.name + ".png";
    atlas.frames[i].frame = {};
    atlas.frames[i].frame.x = mbSprite.x;
    atlas.frames[i].frame.y = mbSprite.y;
    atlas.frames[i].frame.w = mbSprite.width;
    atlas.frames[i].frame.h = mbSprite.height;
    atlas.frames[i].spriteSourceSize = {};
    i++;
});

fs.writeFileSync('Note.json', JSON.stringify(atlas, null, '	'));
