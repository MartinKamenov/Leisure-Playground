import { hasLoggedIn, appKey, appSecret, kinveyUrl } from 'usersOptions';

function processToUploadReadyProject() {
    var btn = document.getElementById("uploadReadyProject");
    btn.addEventListener("click", () => {
        const projectName = $('#projectName').val();
        const videoLink = $('#videoLink').val();
        const description = $('#description').val();

        if (projectName.length > 2 && videoLink.length > 5 && description.length > 5) {

            getUserProject().then((data) => {
                var allProjectNames = data.ProjectName.split(',');
                var allVideoLinks = data.VideoLink.split(',');
                var allDescriptions = data.Description.split(',');

                if (data.ProjectName) {
                    allProjectNames.push(projectName);
                    allVideoLinks.push(videoLink);
                    allDescriptions.push(description);
                }

                var allProjectNamesString = allProjectNames.join(',');
                var allVideoLinksString = allVideoLinks.join(',');
                var allDescriptionsString = allDescriptions.join(',');

                console.log(allProjectNamesString);

                const project = {
                    ProjectName: allProjectNamesString,
                    VideoLink: allVideoLinksString,
                    Description: allDescriptionsString
                };

                uploadReadyProject(project);
            }).catch(() => {
                const project = {
                    ProjectName: projectName,
                    VideoLink: videoLink,
                    Description: description
                };

                uploadReadyProject(project);
            });
        }
    });
}

function processToUploadProjectInProgress() {
    var btn = document.getElementById("uploadNotReadyProject");

    console.log(btn);

    btn.addEventListener("click", () => {
        const projectName = $('#projectName').val();
        const projectUrl = $('#projectUrl').val();
        const description = $('#description').val();
        const contacts = $('#projectContacts').val();

        if (projectName.length > 2 && projectUrl.length > 5 && description.length > 5 && contacts.length > 5) {

            getUserProjectInProgress().then((data) => {
                var allProjectNames = data.ProjectName.split(',');
                var allUrls = data.Url.split(',');
                var allDescriptions = data.Description.split(',');
                var allContacts = data.Contacts.split(',');

                if (data.ProjectName) {
                    allProjectNames.push(projectName);
                    allUrls.push(projectUrl);
                    allDescriptions.push(description);
                    allContacts.push(contacts);
                }

                var allProjectNamesString = allProjectNames.join(',');
                var allUrlsString = allUrls.join(',');
                var allDescriptionsString = allDescriptions.join(',');
                var allContactsString = allContacts.join(',');

                const project = {
                    ProjectName: allProjectNamesString,
                    Contacts: allContactsString,
                    Description: allDescriptionsString,
                    Url: allUrlsString
                };

                uploadProjectInProgress(project);
            }).catch(() => {
                const project = {
                    ProjectName: projectName,
                    Contacts: contacts,
                    Description: description,
                    Url: projectUrl
                };

                uploadProjectInProgress(project);
            });
        }
    });
}

function uploadReadyProject(project) {
    const username = localStorage.getItem('username');
    const authToken = localStorage.getItem('auth-token');
    $.ajax({
        url: `${kinveyUrl}/appdata/${appKey}/projects/${username}`,
        method: 'PUT',
        headers: {
            Authorization: `Kinvey ${authToken}`
        },
        data: JSON.stringify(project),
        contentType: 'application/json',
        success: (returned) => {},
        error: () => alert("failed creating project!")
    });
}

function uploadProjectInProgress(project) {
    const username = localStorage.getItem('username');
    const authToken = localStorage.getItem('auth-token');
    $.ajax({
        url: `${kinveyUrl}/appdata/${appKey}/notReadyProjects/${username}`,
        method: 'PUT',
        headers: {
            Authorization: `Kinvey ${authToken}`
        },
        data: JSON.stringify(project),
        contentType: 'application/json',
        success: (returned) => {},
        error: () => alert("failed creating project!")
    });
}


function getUserProject() {
    const authToken = localStorage.getItem('auth-token');
    const username = localStorage.getItem('username');

    const projects = {};

    return new Promise((resolve, reject) =>
        $.ajax({
            url: `${kinveyUrl}/appdata/${appKey}/projects/${username}`,
            method: 'GET',
            headers: {
                Authorization: `Kinvey ${authToken}`
            },
            contentType: 'application/json',
            success: (userProjects) => {
                resolve(userProjects);
            },
            error: () => reject()
        })
    );
}

function getUserProjectInProgress() {
    const authToken = localStorage.getItem('auth-token');
    const username = localStorage.getItem('username');

    const projects = {};

    return new Promise((resolve, reject) =>
        $.ajax({
            url: `${kinveyUrl}/appdata/${appKey}/notReadyProjects/${username}`,
            method: 'GET',
            headers: {
                Authorization: `Kinvey ${authToken}`
            },
            contentType: 'application/json',
            success: (userProjects) => {
                resolve(userProjects);
            },
            error: () => reject()
        })
    );
}

function getAllProjects() {
    const authToken = localStorage.getItem('auth-token');
    const username = localStorage.getItem('username');

    const projects = {};

    return new Promise((resolve, reject) =>
        $.ajax({
            url: `${kinveyUrl}/appdata/${appKey}/projects`,
            method: 'GET',
            headers: {
                Authorization: `Kinvey ${authToken}`
            },
            contentType: 'application/json',
            success: (allProjects) => {
                resolve(allProjects);
            },
            error: () => reject()
        })
    );
}

export {
    processToUploadReadyProject,
    processToUploadProjectInProgress,
    uploadReadyProject,
    uploadProjectInProgress,
    getUserProject,
    getAllProjects
}