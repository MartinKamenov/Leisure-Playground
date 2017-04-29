import { homeTemplate, errorTemplate } from 'templates';

function hashChecker() {
    $(window).on('hashchange', (ev) => {
        const hashUrl = location.hash;
        checkForPath(hashUrl);
    });
}

function checkForPath(hashUrl) {
    hashUrl = hashUrl.slice(1, hashUrl.length);
    if (hashUrl === 'home') {
        location.reload('../index.html');
        var container = document.getElementById('page-container');
        container.innerHTML = homeTemplate();
    } else if (hashUrl === 'login') {

    } else if (hashUrl === '') {
        location.replace('#home');
    } else {
        errorTemplate();
    }
}

export { hashChecker };