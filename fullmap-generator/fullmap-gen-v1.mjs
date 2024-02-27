console.time();
import fs from 'fs';

const area = 512;

if (area > 512) {
    console.log("Byte overflow! (Max area: 512)");
    process.exit();
}

const tileSize = Math.ceil(area / 2);
const bool = [0, 255];
let buffer = Buffer.alloc(2 * 2 * tileSize * tileSize * 4);
let b = 0;

for (const bool1 of bool) {
    for (const bool2 of bool) {
        for (let i = 0; i < tileSize; i++) {
            for (let j = 0; j < tileSize; j++) {
                const tileData = [boolCheck(i, bool1), bool1, boolCheck(j, bool2), bool2];
                for (let k = 0; k < 4; k++) {
                    buffer[b++] = tileData[k];
                }
            }
        }
    }
}

function boolCheck(dec, bool) {
    if (bool == 255) {
        return 255 - dec;
    }
    return dec;
}

const mapBin = buffer;
fs.writeFileSync(`./output/fullmap-${area}.bytes`, mapBin, "binary");
console.timeEnd();
