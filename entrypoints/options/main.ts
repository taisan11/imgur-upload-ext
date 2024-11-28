import { ImgurUploadData } from '../../types';

window.onload = async function() {
    const main = document.getElementById('main');
    const keys = Object.keys(await browser.storage.local.get());
    const data = await browser.storage.local.get() as {[key:string]:ImgurUploadData};
    const br = document.createElement('br');
    keys.forEach(key => {
        console.log(key);
        const a = document.createElement('a');
        a.href = data[key].link;
        a.textContent = data[key].link;
        main!.appendChild(a);
        main!.appendChild(br.cloneNode());
    });
}