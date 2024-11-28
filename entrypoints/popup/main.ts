import { ImgurUploadData } from '../../types';

const input = document.getElementById("a") as HTMLInputElement;
const copyButton = document.getElementById("copyLink") as HTMLButtonElement;
input.accept = '.jpg,.jpeg,.png,.gif,.apng,tiff,mp4';
input.type = 'file';

input.onchange = (event) => {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
        const isImage = file.type.startsWith('image/');
        const headers = new Headers();
        headers.set("Authorization", "Client-ID ");
        const form = new FormData();
        form.append("image", file);
        form.append("type", isImage ? "image" : "video");
        fetch("https://api.imgur.com/3/image", {
            method: "POST",
            headers: headers,
            body: form
        })
        .then(response => {
            console.log(response);
            return response.json() as Promise<{data:ImgurUploadData}>;
        })
        .then(result => {
            browser.storage.local.set({ [Date.now()]: result.data });
            const a = document.createElement('a');
            a.href = result.data.link;
            a.textContent = result.data.link;
            document.body.appendChild(a);
        })
        .catch(error => console.log('error', error));
    }
};