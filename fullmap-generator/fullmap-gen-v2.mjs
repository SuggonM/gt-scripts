/*
 * this version utilizes the "wrap around" behavior of Uint16Arrays
 * compatible with 512+ tiles wide maps
 * computation time halved
 * complies with the semantics of binary data
 */

console.time();
import fs from 'fs';

const area = 512;

if (area > 256*256) {
    console.log("Byte overflow! (Max area: 65,536)");
    process.exit();
}

const tileSize = Math.ceil(area / 2);
const ab = Buffer.alloc(tileSize * tileSize * 2 * 2 * 2);
let buffer = new Uint16Array(ab);
let b = 0;

for (let i = 0; i < tileSize; i++) {
    for (let j = 0; j < tileSize; j++) {
        for (const X of [i, -(i+1)]) {
            for (const Y of [j, -(j+1)]) {
                buffer[b++] = X;
                buffer[b++] = Y;
            }
        }
    }
}

const mapBin = buffer;
fs.writeFileSync(`./output/fullmap-${area}.bytes`, mapBin, "binary");
console.timeEnd();
