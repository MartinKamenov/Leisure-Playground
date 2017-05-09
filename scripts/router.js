import {
    homeTemplate,
    registerTemplate,
    errorTemplate,
    UploadReadyProjectTemplate,
    UploadProgressProjectTemplate,
    showUserProjects,
    noProjects,
    showAllProjects,
    showAllNotReadyProjects
} from 'templates';
import { jquery } from 'jQuery';
import { processToRegister, processToLogin, hasLoggedIn, getTopUsers } from 'usersOptions';
import {
    processToUploadReadyProject,
    processToUploadProjectInProgress,
    getUserProject,
    getAllProjects,
    getAllNotReadyProjects,
} from 'projectOptions';
import { processToCreateGame, getAllGames } from 'gameOptions'

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
    var container = document.getElementById('page-container');
    switch (hashUrl) {
        case 'home':

            container.innerHTML = "";
            if (hasLoggedIn()) {
                container.innerHTML = getTopUsers();
            } else {
                container.innerHTML = homeTemplate();
            }
            break;
        case 'register':

            container.innerHTML = "";
            container.innerHTML = registerTemplate();
            processToRegister();
            break;
        case '':
            location.replace('#home');
            break;
        case 'upload-ready-project':
            var isLogged = hasLoggedIn();

            if (isLogged) {
                container.innerHTML = "";
                container.innerHTML = UploadReadyProjectTemplate();
                processToUploadReadyProject();
            } else {
                container.innerHTML = "";
                var h1 = document.createElement('h1');
                h1.className = 'register-error-msg';
                h1.innerHTML = "You should register first if you want to upload a project.";
                container.appendChild(h1);
                container.innerHTML += registerTemplate();
                processToRegister();
            }
            break;
        case 'upload-progress-project':
            var isLogged = hasLoggedIn();

            if (isLogged) {
                container.innerHTML = UploadProgressProjectTemplate();
                processToUploadProjectInProgress();
            } else {
                container.innerHTML = "";
                var h1 = document.createElement('h1');
                h1.className = 'register-error-msg';
                h1.innerHTML = "You should register first if you want to upload a project.";
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

            container.innerHTML = '';
            getAllProjects().then((projects) => {
                showAllProjects(projects);
            }).catch(() => {
                container.innerHTML = '<h1 class="register-error-msg">You need to sign in if you want to look at projects</h1>';
            });
            break;
        case 'project-in-progress':

            container.innerHTML = '';
            getAllNotReadyProjects().then((projects) => {
                showAllNotReadyProjects(projects);
            }).catch(() => {
                container.innerHTML = '<h1 class="register-error-msg">You need to sign in if you want to look at projects</h1>';
            });
            break;

        case 'createGame':
            processToCreateGame();
            break;
        case 'showGames':
            getAllGames();
            break;
        default:
            errorTemplate();
    }
}

export { hashChecker };