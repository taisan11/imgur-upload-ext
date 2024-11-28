window.onload = function() {
    const main = document.getElementById('main');
    const data = browser.storage.local.get('data');
    data.then((result) => {
        const p = document.createElement('p');
        p.inert = result.data.data.link;
        main?.appendChild(p);
    });
}