/*
  visit the url, then run the script in devtools console
  https://cafe.daum.net/_c21_/album_list?listnum=999&grpid=1YmAL&fldid=BWjU
*/

const iframe = document.querySelector('iframe#down');
const gallery = iframe.contentDocument.querySelector('#article-list');
const images = gallery.querySelectorAll('li .box_thumb img');
const urls = [];

images.forEach((img) => {
    const url = img.src.replace(/.*fname=/, '');
    urls.push(decodeURIComponent(url));
});

copy(urls);
console.log(urls);
console.log(`LOG: ${urls.length} links copied to clipboard!`);
