import fs from 'fs';

const mb = fs.readFileSync('./Chapter Preview-MonoBehaviour.json');
const mbAtlas = JSON.parse(mb);

const newAtlas = {
    frames: [],
    meta: { size: { w: 1024, h: 2048 } }
};

mbAtlas.mSprites.forEach((mbSprite) => {
    const newSprite = {
        filename: mbSprite.name + ".png",
        frame: {
            x: mbSprite.x,
            y: mbSprite.y,
            w: mbSprite.width,
            h: mbSprite.height
        },
        spriteSourceSize: {}
    }

    newAtlas.frames.push(newSprite);
});

const atlas = JSON.stringify(newAtlas, null, '\t')
fs.writeFileSync('./Chapter Preview.json', atlas);
