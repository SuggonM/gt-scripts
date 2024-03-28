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

// some images have duplicate naming and silently corrupt the downloading image
// list names and check uniqueness as solution
const uniqueList = [];
let dupeCount = 0;

try {
    urls.forEach((url) => downloadFile(url));
    console.log(`LOG: Downloading ${urls.length} images into folder "./${outFolder}" ...`);
} catch(error) {
    console.error(error);
}

function downloadFile(url) {
    url = new URL(url);
    url = validateHost(url);

    const options = {
        hostname: url.hostname,
        path: url.pathname + '?original',
        method: 'GET'
    };

    const httpsreq = request(options, (response) => {
        const headers = response.headers;
        /*
          'content-type': 'image/png',
          'content-disposition': `inline; filename="ì€í•˜.png"; filename*=UTF-8''%EC%9D%80%ED%95%98.png`,
        */

        const CD = headers['content-disposition'];
        const nameFragment = CD.replace(/.*UTF-8''/, '');
        const name = decodeURI(nameFragment);

        const CType = headers['content-type'];
        const ext = CType.replace('image/', '');

        const uniqueName = getUniqueName(name, ext);
        const dlpath = fs.createWriteStream(outFolder + uniqueName);
        logImgName(url, name);
        response.pipe(dlpath);
    });

    httpsreq.end();
}

function validateHost(url) {
    const secureHost = 't1.daumcdn.net';
    const insecureHost = /cfile\d+\.uf\.daum\.net/;
    // "cfile[0-9]{3}.uf.daum.net"

    if (url.hostname.match(insecureHost)) {
        url.hostname = secureHost;
        url.pathname = url.pathname.replace('/image/', '/cfile/cafe/').replace(/.{4}$/, '');
        /*
          "https://cfile293.uf.daum.net/image/99B5034C5F0287A63F30B6"
           "https://t1.daumcdn.net/cfile/cafe/99B5034C5F0287A63F"
        */
    }

    return url;
}

function getUniqueName(name, ext) {
    const noExtName = name.substring(0, name.lastIndexOf('.')) || name;

    if (uniqueList.includes(noExtName)) {
        const dupeName = `${noExtName} (${++dupeCount}).${ext}`;
        return dupeName;
    }

    uniqueList.push(noExtName);
    const uniqueName = `${noExtName}.${ext}`;
    return uniqueName;
}

function logImgName(url, name) {
    const lineData = `${url} : ${name}\n`;
    logFileStream.write(lineData);
}
