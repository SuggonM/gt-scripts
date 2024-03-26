import fs from 'fs';
import { request } from 'https';

// select any one

// const title = 'Illustrations';
// const title = 'Comics';
const title = 'X-FILES';

const inFile    = title + '/' + title + '_links.json';
const logFile   = title + '/' + title + '_names.txt';
const outFolder = title + '/' + title + '_images/';

const urlFile = fs.readFileSync(inFile);
const urls = JSON.parse(urlFile);

const logFileStream = fs.createWriteStream(logFile);

try {
    urls.forEach((url) => downloadFile(url));
    console.log(`LOG: Downloading ${urls.length} images into folder "./${outFolder}" ...`);
} catch(e) {
    console.error(e);
}

function logImgName(url, name) {
    const lineData = `${url} : ${name}\n`;
    logFileStream.write(lineData);
}

function downloadFile(url) {
    const urlpath = url.split('/');
    const hostname = urlpath[2];
    const path = '/' + urlpath.slice(3).join('/');
    const options = {
        hostname: hostname,
        path: path + '?original',
        method: 'GET'
    }

    const httpsreq = request(options, (response) => {
        const headers = response.rawHeaders;
        const CDindex = headers.indexOf('Content-Disposition') + 1;
        const CD = headers[CDindex];
        const rawname = decodeURI(CD);
        const name = rawname.replace(/.*UTF-8''/, '');
        const dlpath = fs.createWriteStream(outFolder + name);
        logImgName(url, name);
        response.pipe(dlpath);
    });

    httpsreq.end();
}
