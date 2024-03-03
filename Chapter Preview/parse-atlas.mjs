import fs from 'fs';

const mb = fs.readFileSync('./Chapter Preview-MonoBehaviour.json');
const mbAtlas = JSON.parse(mb);
const atlas = {};

atlas.frames = [];
atlas.meta = {};
atlas.meta.size = {};
atlas.meta.size.w = 1024;
atlas.meta.size.h = 2048;

let i = 0;
mbAtlas.mSprites.forEach((mbSprite) => {
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

const newAtlas = JSON.stringify(atlas, null, '\t')
fs.writeFileSync('Chapter Preview.json', newAtlas);
