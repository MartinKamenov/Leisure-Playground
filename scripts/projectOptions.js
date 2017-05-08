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
                console.log(data);
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
                var allDescriptions = allDescriptions.join(',');

                console.log(allProjectNamesString);

                const project = {
                    ProjectName: allProjectNamesString,
                    VideoLink: allVideoLinksString,
                    Description: allDescriptions
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