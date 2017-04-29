import { homeTemplate } from 'templates';

function hashChecker() {
    $(window).on('hashchange', (ev) => {
        const hashUrl = location.hash;
        checkForPath(hashUrl);
    });
}

function checkForPath(hashUrl) {
    hashUrl = hashUrl.slice(1, hashUrl.length);
    if (hashUrl === 'home') {
        var container = document.getElementById('page-container');
        container.innerHTML = homeTemplate();
    }
}

export { hashChecker };