/*
 * v2.1 for the sake of completeness because v2 can't allocate memory higher than 2^(32-1) bytes
 * compatible with 23,170+ tiles wide maps (impractical)
 * computation time 20% slower
 * ...probably don't use this script
 */

console.time();
import fs from 'fs';
import { Buffer } from 'node:buffer';

const area = 23171;

if (area > 256*256) {
    console.log("Data overflow! (Max area: 65,536)");
    process.exit(1);
}

const tileSize = Math.ceil(area / 2);
const mapBin = fs.createWriteStream(`./output/fullmap-${area}.bytes`);

for (let i = 0; i < tileSize; i++) {
    const buffer = Buffer.alloc(tileSize * 16);
    let b = 0;
    for (let j = 0; j < tileSize; j++) {
        for (const X of [i, -(i+1)]) {
            for (const Y of [j, -(j+1)]) {
                buffer.writeInt16LE(X, b++ * 2);
                buffer.writeInt16LE(Y, b++ * 2);
            }
        }
    }
    mapBin.write(buffer);
}

console.timeEnd();
