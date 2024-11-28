console.log('Hello from popup/main.ts');
const input = document.getElementById("a") as HTMLInputElement;
input.accept = '.jpg,.jpeg,.png,.gif,.apng,tiff,mp4';
input.type = 'file';
input.onchange = (event) => {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
        console.log(`Selected file: ${file.name}`);
        const isImage = file.type.startsWith('image/');
        const headers = new Headers();
        headers.set("Authorization", "Client-ID {{clientId}}");
        const form = new FormData();
        form.append("image", file);
        form.append("type", isImage ? "image" : "video");
        fetch("https://api.imgur.com/3/image", {
            method: "POST",
            headers: headers,
            body: form
        }).then(response => response.text())
        .then(result => {browser.storage.local.set({data:JSON.parse(result)});})
        .catch(error => console.log('error', error));
    }
};