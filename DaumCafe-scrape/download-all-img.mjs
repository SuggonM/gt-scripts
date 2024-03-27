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
const imgList = [];
let dupeCount = 0;

try {
    urls.forEach((url) => downloadFile(url));
    console.log(`LOG: Downloading ${urls.length} images into folder "./${outFolder}" ...`);
} catch(e) {
    console.error(e);
}

function downloadFile(url) {
    url = validateHost(url);
    const urlpath = url.split('/');
    const hostname = urlpath[2];
    const path = '/' + urlpath.slice(3).join('/');
    const options = {
        hostname: hostname,
        path: path + '?original',
        method: 'GET'
    };

    const httpsreq = request(options, (response) => {
        const headers = response.headers;
        /*
          'content-type': 'image/png',
          'content-disposition': `inline; filename="ì€í•˜.png"; filename*=UTF-8''%EC%9D%80%ED%95%98.png`,
        */

        const CD = headers["content-disposition"];
        const nameFragment = CD.replace(/.*UTF-8''/, '');
        const name = decodeURI(nameFragment);

        const CType = headers["content-type"];

        const uniqueName = getUniqueName(name, CType);
        const dlpath = fs.createWriteStream(outFolder + uniqueName);
        logImgName(url, name);
        response.pipe(dlpath);
    });

    httpsreq.end();
}

function validateHost(url) {
    const secureHost = 't1.daumcdn.net/cfile/cafe/';
    const insecureHost = /cfile\d+\.uf\.daum\.net\/image\//;
    // "cfile[0-9]{3}.uf.daum.net/image/"

    let secureUrl = url;
    if (url.match(insecureHost)) {
        const last4 = /.{4}$/;
        secureUrl = url.replace(insecureHost, secureHost).replace(last4, '');
        // "https://cfile293.uf.daum.net/image/99B5034C5F0287A63F30B6"
        //  "https://t1.daumcdn.net/cfile/cafe/99B5034C5F0287A63F"
    }

    return secureUrl;
}

function getUniqueName(name, CType) {
    const noExtName = name.substring(0, name.lastIndexOf('.')) || name;
    const ext = CType.replace('image/', '');

    if (imgList.includes(noExtName)) {
        const dupeName = `${noExtName} (${++dupeCount}).${ext}`;
        return dupeName;
    }

    imgList.push(noExtName);
    const uniqueName = `${noExtName}.${ext}`;
    return uniqueName;
}

function logImgName(url, name) {
    const lineData = `${url} : ${name}\n`;
    logFileStream.write(lineData);
}
