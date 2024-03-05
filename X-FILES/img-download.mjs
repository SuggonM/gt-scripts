import fs from 'fs';
import { request } from 'https';

const inFile = './X-FILES_links.txt';
const outFile = './X-FILES_names.txt';

const urlFile = fs.readFileSync(inFile);
const urls = getUrls(urlFile);

const logFile = fs.createWriteStream(outFile);

urls.forEach((url) => downloadFile(url));

function getUrls(urlFile) {
    urlFile = encodeURI(urlFile);
    urlFile = decodeURI(urlFile);
    const urls = urlFile.match(/[^\r\n]+/g);
    return urls;
}

function logImgName(url, name) {
    const lineData = `${url} : ${name}\n`;
    logFile.write(lineData);
}

function downloadFile(url) {
    const urlpath = url.split('/');
    const hostname = urlpath[2];
    const path = '/' + urlpath.slice(3).join('/') + '?original';
    const options = {
        hostname: hostname,
        path: path,
        method: 'GET'
    }

    const httpsreq = request(options, (response) => {
        const headers = response.rawHeaders;
        const CDindex = headers.indexOf('Content-Disposition') + 1;
        const CD = headers[CDindex];
        const rawname = decodeURI(CD);
        const name = rawname.replace(/.*UTF-8''/, '');
        const dlpath = fs.createWriteStream('./X-FILES/' + name);
        logImgName(url, name);
        response.pipe(dlpath);
    });

    httpsreq.end();
}
