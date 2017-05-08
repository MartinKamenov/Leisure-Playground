import {
    homeTemplate,
    registerTemplate,
    errorTemplate,
    UploadReadyProjectTemplate,
    UploadProgressProjectTemplate,
    showUserProjects,
    noProjects
} from 'templates';
import { jquery } from 'jQuery';
import { processToRegister, processToLogin, hasLoggedIn } from 'usersOptions';
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
            container.innerHTML = "";
            container.innerHTML = homeTemplate();
            break;
        case 'register':
            var container = document.getElementById('page-container');
            container.innerHTML = "";
            container.innerHTML = registerTemplate();
            processToRegister();
        break;
        case '':
            location.replace('#home');
        break;
        case 'upload-ready-project':
            var isLogged = hasLoggedIn();
            var container = document.getElementById('page-container');
            if (isLogged) {
                container.innerHTML = "";
                container.innerHTML = UploadReadyProjectTemplate();
                processToUploadReadyProject();
            } else {
                container.innerHTML = "";
                var h1 = document.createElement('h1');
                h1.innerHTML = "You should register first if you want to upload a project.";
                h1.style.color = 'red';
                container.appendChild(h1);
                container.innerHTML += registerTemplate();
                processToRegister();
            }
        break;
        case 'upload-progress-project':
            var isLogged = hasLoggedIn();
            var container = document.getElementById('page-container');
            if (isLogged) {
                container.innerHTML = UploadProgressProjectTemplate();
            } else {
                container.innerHTML = "";
                var h1 = document.createElement('h1');
                h1.innerHTML = "You should register first if you want to upload a project.";
                h1.style.color = 'red';
                container.appendChild(h1);
                container.innerHTML += registerTemplate();
                processToRegister();
            }
        break;
        case 'show-user-projects':
            getUserProject().then((userProject) => {
                showUserProjects(userProject);
            }).catch(() => noProjects());
        break;
        case 'ready-projects':
            var container = document.getElementById('page-container');
            container.innerHTML=('<p>some text</p>');
        break;
        case 'project-in-progress':
            var container = document.getElementById('page-container');
            container.innerHTML=('<p>some text</p>');
        break;
        default:
            errorTemplate();
    }
}

export { hashChecker };