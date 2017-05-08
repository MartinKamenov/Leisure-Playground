import { hasLoggedIn, appKey, appSecret, kinveyUrl } from 'usersOptions';

function processToUploadReadyProject() {
    var btn = document.getElementById("uploadReadyProject");
    var projects = [];
    btn.addEventListener("click", () => {
        const projectName = $('#projectName').val();
        const videoLink = $('#videoLink').val();
        const description = $('#description').val();

        if (projectName.length > 2 && videoLink.length > 5 && description.length > 5) {

            getUserProject().then((data) => {
                var allProjectNames = [];
                var allVideoLinks = [];
                var allDescriptions = [];

                if (data.ProjectName) {
                    allProjectNames.push(data.ProjectName);
                    allVideoLinks.push(data.VideoLink);
                    allDescriptions.push(data.Description);
                }
                allProjectNames.push(projectName);
                allVideoLinks.push(videoLink);
                allDescriptions.push(description);

                console.log(allProjectNames);

                const project = {
                    ProjectName: allProjectNames,
                    VideoLink: allVideoLinks,
                    Description: allDescriptions
                };

                uploadReadyProject(project);
            }).catch((data) => {

                const project = {
                    ProjectName: projectName,
                    VideoLink: videoLink,
                    Description: description
                };
                uploadReadyProject(project);
            });
        } else {
            console.log('Project properties are too short');
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

function uploadProjectInProgress() {

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

export { processToUploadReadyProject, uploadReadyProject, uploadProjectInProgress, getUserProject, getAllProjects }