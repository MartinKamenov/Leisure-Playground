import {
    homeTemplate,
    registerTemplate,
    errorTemplate,
    UploadReadyProjectTemplate,
    UploadProgressProjectTemplate,
    showUserProjects
} from 'templates';
import { jquery } from 'jQuery';
import { processToRegister, processToLogin } from 'usersOptions';
import { processToUploadReadyProject, getUserProject } from 'projectOptions';

function hashChecker() {
    $(document).ready(function() {
        const hashUrl = location.hash;
        checkForPath(hashUrl);
    });
    $(window).on('hashchange', (ev) => {
        const hashUrl = location.hash;
        checkForPath(hashUrl);
    });
}

function checkForPath(hashUrl) {
    hashUrl = hashUrl.slice(1, hashUrl.length);
    if (hashUrl === undefined) {
        location.replace('#home');
    }
    switch (hashUrl) {
        case 'home':
            var container = document.getElementById('page-container');
            container.innerHTML = homeTemplate();
            break;
        case 'register':
            var container = document.getElementById('page-container');
            container.innerHTML = registerTemplate();
            processToRegister();
            break;
        case '':
            location.replace('#home');
            break;
        case 'upload-ready-project':
            var container = document.getElementById('page-container');
            container.innerHTML = UploadReadyProjectTemplate();
            processToUploadReadyProject();
            break;
        case 'upload-progress-project':
            var container = document.getElementById('page-container');
            container.innerHTML = UploadProgressProjectTemplate();
            break;
        case 'show-user-projects':
            getUserProject().then((userProject) => {
                showUserProjects(userProject);
            });
            break;
        default:
            errorTemplate();
    }
}

export { hashChecker };