import fs from 'fs';
import { request } from 'https';

const inFile = './X-FILES_links.txt';
const outFile = './X-FILES_names.txt';

const urlFile = fs.readFileSync(inFile);
const urls = getUrls(urlFile);

fs.openSync(outFile, 'w');
const imgNames = fs.createWriteStream(outFile);

urls.forEach((url) => {
    downloadFile(url, (fileName) => {
        const lineData = `${url} : ${fileName}\n`;
        imgNames.write(lineData);
    });
});

function getUrls(urlFile) {
    urlFile = encodeURI(urlFile);
    urlFile = decodeURI(urlFile);
    const urls = urlFile.split('\r\n');
    return urls;
}

function downloadFile(url, fileName) {
    const urlpath = url.split('/');
    const hostname = urlpath[2];
    const path = '/' + urlpath.slice(3).join('/') + '?original';
    const options = {
        hostname: hostname,
        path: path,
        method: 'GET',
        rejectUnauthorized: false
    }

    const httpsreq = request(options, (response) => {
        const headers = response.rawHeaders;
        const CDindex = headers.indexOf('Content-Disposition') + 1;
        const CD = headers[CDindex];
        const rawname = decodeURI(CD);
        const name = rawname.replace(/.*UTF-8''/, '');
        const dlpath = fs.createWriteStream('./X-FILES/' + name);
        fileName(name);
        response.pipe(dlpath);
    });

    httpsreq.end();
}
