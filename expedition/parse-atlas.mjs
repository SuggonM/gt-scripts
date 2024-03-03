import fs from 'fs';

const mb = fs.readFileSync('./Note-MonoBehaviour.json');
const mbAtlas = JSON.parse(mb);
const atlas = {};

atlas.frames = [];
atlas.meta = {};
atlas.meta.size = {};
atlas.meta.size.w = 512;
atlas.meta.size.h = 512;

mbAtlas.mSprites.forEach((mbSprite, i) => {
    atlas.frames[i] = {};
    atlas.frames[i].filename = mbSprite.name + ".png";
    atlas.frames[i].frame = {};
    atlas.frames[i].frame.x = mbSprite.x;
    atlas.frames[i].frame.y = mbSprite.y;
    atlas.frames[i].frame.w = mbSprite.width;
    atlas.frames[i].frame.h = mbSprite.height;
    atlas.frames[i].spriteSourceSize = {};
});

const newAtlas = JSON.stringify(atlas, null, '\t')
fs.writeFileSync('Note.json', newAtlas);
