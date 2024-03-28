/*
  visit the url, then run the script in devtools console
  https://cafe.daum.net/_c21_/album_list?grpid=1YmAL&listnum=999&fldid=AahU
  
  replace the 'fldid' url parameter to use on other gallery pages:
  ARz7: Illustrations   (Vivid Gallery)
  DS8O: Comics          (4-cut Cartoon)
  AahU: X-FILES         (Hero X-FILES)
  BWjU: Fan Arts        (Fan Art Gallery)
  ARzF: Fan Blog Images (Article Gallery)
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
