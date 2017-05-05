import { hasLoggedIn, appKey, appSecret, kinveyUrl } from 'usersOptions';

function uploadReadyProject(project) {
    const username = localStorage.getItem('username');
    const authToken = localStorage.getItem('auth-token');
    $.ajax({
        url: `${kinveyUrl}/appdata/${appKey}/projects/${username}`,
        method: 'PUT',
        headers: {
            Authorization: `Kinvey ${username}`
        },
        data: JSON.stringify(project),
        contentType: 'application/json',
        success: (returned) => {
            console.log("Uploaded");
        },
        error: () => alert("failed creating project!")
    });
}

function uploadProjectInProgress() {

}

function getUserProject() {
    const authToken = localStorage.getItem('auth-token');
    const username = localStorage.getItem('username');
    $.ajax({
        url: `${kinveyUrl}/appdata/${appKey}/projects/${username}`,
        method: 'GET',
        headers: {
            Authorization: `Kinvey ${authToken}`
        },
        contentType: 'application/json',
        success: (userProjects) => {
            return userProjects;
        },
        error: () => alert("failed getting user projects!")
    });
}

function getAllProjects() {
    const authToken = localStorage.getItem('auth-token');
    const username = localStorage.getItem('username');
    $.ajax({
        url: `${kinveyUrl}/appdata/${appKey}/projects`,
        method: 'GET',
        headers: {
            Authorization: `Kinvey ${authToken}`
        },
        contentType: 'application/json',
        success: (allProjects) => {
            return allProjects;
        },
        error: () => alert("failed getting user projects!")
    });
}

export { uploadReadyProject, uploadProjectInProgress, getUserProject, getAllProjects }