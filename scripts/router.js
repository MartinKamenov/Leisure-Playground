import { homeTemplate, errorTemplate } from 'templates';
import { jquery } from '../jQuery/jquery.js';

function hashChecker() {
    $(document).ready(function() {
        const hashUrl = location.hash;
        checkForPath(hashUrl);
    });
    $(window).on('hashchange', (ev) => {
        console.log('in');
        const hashUrl = location.hash;
        checkForPath(hashUrl);
    });
}

function checkForPath(hashUrl) {
    hashUrl = hashUrl.slice(1, hashUrl.length);
    if (hashUrl === undefined) {
        location.replace('#home');
    }
    if (hashUrl === 'home') {
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