import notification from "./notification.js";

let currentDocModification = null;

function getLatModificationDate(url) {
    // https://developer.mozilla.org/en-US/docs/Web/API/Document/lastModified#notes

    let url_no_cache = url + ((/\?/).test(url) ? "&" : "?") + (new Date()).getTime();
    return fetch(url, {
        cache: 'no-cache',
    }).then((response) => {
        return response.headers.get('Last-Modified');  
    });
}

function checkChange() {
    getLatModificationDate(window.location.href).then((last_mod) => {
        let lastModifiedDate = Date.parse(last_mod);

        if (currentDocModification == null) {
            currentDocModification = lastModifiedDate;
        }

        if (lastModifiedDate > currentDocModification) {
            const defaultText = "The page has been updated. Click to refresh.";
            let text = defaultText;
            if ('notify-old-page' in window.ihandout_config &&
                'text' in window.ihandout_config['notify-old-page']) {
                text = window.ihandout_config['notify-old-page']['text'];
            }
            notification.toast(text, {
                bgColor: "warning",
                onClick: () => {
                    window.location.reload();
                }
            });
        }

    });
}

window.setInterval(checkChange, 5 * 60 * 1000);