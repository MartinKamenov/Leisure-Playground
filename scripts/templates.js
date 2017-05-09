import { Handlebars } from 'handlebars';

var handlebar = 'my handlebar';
const separator = '|^|';

function homeTemplate() {
    var template = "HomeTemplate";
    return template;
}

function hasUser() {
    var username = localStorage.getItem('username');

    var template = '<form class="form-horizontal">' +
        '<h1 id="user">' +
        '<img id="profileHomeButton"></img>' +
        username +
        '</h1>' +
        '<button id="logout-button" class="btn btn-warning">' +
        'Log out' +
        '</button>' +
        '</form>';
    return template;
}

function noUser() {
    var template = '<form class="form-horizontal">' +
        '<div class="form-group">' +
        '<label for="inputEmail3" class="col-sm-2 control-label">Username</label>' +
        '<div class="col-sm-10">' +
        '<input type="text" id="username" class="form-control" placeholder="Username">' +
        '</div>' +
        '</div>' +
        '<div class="form-group">' +
        '<label for="inputPassword3" class="col-sm-2 control-label">Password</label>' +
        '<div class="col-sm-10">' +
        '<input type="password" id="password" class="form-control" placeholder="Password">' +
        '</div>' +
        '</div>' +
        '<div class="form-group">' +
        '<div class="col-sm-offset-2 col-sm-10">' +
        '<button type="submit" id="login-button" class="btn btn-success">Login</button>' +
        '<button type="submit" id="register" class="btn btn-danger">Register</button>' +
        '</div>' +
        '</div>' +
        '</form>';
    return template;
}

function registerTemplate() {
    var template =
        '<form id="create-new-user">' +
        '<div class="form-group">' +
        '<label for="register-username">Username <p class="normal-text">(longer than 2 symbols)</p></label>' +
        '<input type="username" class="form-control" id="register-username" placeholder="Username">' +
        '</div>' +
        '<div class="form-group">' +
        '<label for="register-password">Password <p class="normal-text">(longer than 5 symbols)</p></label>' +
        '<input type="password" class="form-control" id="register-password" placeholder="Password">' +
        '</div>' +
        '<div class="form-group">' +
        '<label for="register-email">Email</label>' +
        '<input type="email" class="form-control" id="register-email" placeholder="Email">' +
        '</div>' +
        '<div>' +
        '<button type="submit" class="btn btn-danger" id="register-button">Create user</button>' +
        '</div>' +
        '</form>';
    return template;
}

function UploadReadyProjectTemplate() {
    var template =
        '<h1 class="project-type-header">Ready Project</h1>' +
        '<form class="upload-project-form">' +
        '<div class="form-group">' +
        '<label for="">Project name <p class="normal-text">(longer than 2 symbols)</p></label>' +
        '<input type="Username" class="form-control" id="projectName" placeholder="Project name">' +
        '</div>' +
        '<div class="form-group">' +
        '<label for="">Video Link</label>' +
        '<input type="url" class="form-control" id="videoLink" placeholder="Video URL">' +
        '</div>' +
        '<div class="form-group">' +
        '<label for="">Description</label>' +
        '<textarea type="text" class="form-control description" id="description" placeholder="Your description">' +
        '</textarea>' +
        '</div>' +
        '<div>' +
        '<button type="submit" class="btn btn-info upload-project" id="uploadReadyProject">Upload project</button>' +
        '</div>' +
        '</form>';
    return template;
}

function UploadProgressProjectTemplate() {
    var template =
        '<h1 class="project-type-header">Project in progress</h1>' +
        '<form class="upload-project-form">' +
        '<div class="form-group">' +
        '<label for="">Project name <p class="normal-text">(longer than 2 symbols)</p></label>' +
        '<input type="Username" class="form-control" id="projectName" placeholder="Project name">' +
        '</div>' +
        '<div class="form-group">' +
        '<label for="">Repository Link</label>' +
        '<input type="url" class="form-control" id="projectUrl" placeholder="Repo URL">' +
        '</div>' +
        '<div class="form-group">' +
        '<label for="">How to reach me</label>' +
        '<textarea type="text" class="form-control contact" id="projectContacts" placeholder="Input information on how someone ' +
        'could contact you in order to discuss your project like an email, skype or your postal code :D">' +
        '</textarea>' +
        '</div>' +
        '<div class="form-group">' +
        '<label for="">Description</label>' +
        '<textarea type="text" class="form-control description" id="description" placeholder="Describe your project. Ideas, plot and add a story on how u got to start it and develop it">' +
        '</textarea>' +
        '</div>' +
        '<div>' +
        '<button type="submit" class="btn btn-info upload-project" id="uploadNotReadyProject">Upload project</button>' +
        '</div>' +
        '</form>';
    return template;
}
//if the user does not have any projects
function noProjects() {
    var container = document.getElementById('page-container');
    var h1 = document.createElement('h1');
    container.innerHTML = "This user has no projects yet.";
    container.appendChild(h1);
}
//when some1 opens his own profile to view projects

function showUserProjects(userProject) {
    var projectNames = userProject.ProjectName.split(separator);
    var videoLinks = userProject.VideoLink.split(separator);
    var descriptions = userProject.Description.split(separator);
    var template =
        '<h1 class="project-type-header">Ready Projects </h1>' +
        '<form class="upload-project-form" id="form">' +
        '</form>';

    var container = document.getElementById('page-container');
    container.innerHTML = template;
    var form = document.getElementById('form');

    if (projectNames instanceof Array) {
        for (var i = 0; i < projectNames.length; i += 1) {
            var div = document.createElement('div');
            div.className='user-project-div';
            var h1 = document.createElement('h1');
            h1.className='project-header';
            h1.innerHTML = (i + 1) + ": " + projectNames[i] + '<br>';
            div.appendChild(h1);
            var innerDiv=document.createElement('div');
            innerDiv.className='user-project-inner-div';
            var link = document.createElement('p');
            link.className="project-link";
            link.innerHTML = `Link: <a  href="${videoLinks[i]}" target="_blank" >${videoLinks[i]}</a><br>`;
            innerDiv.appendChild(link);
            var description = document.createElement('div');
            description.className='description-project-div';
            description.innerHTML = `<p>Description: </p> <p class="project-description">${descriptions[i]}</p>`;
            innerDiv.appendChild(description);
            div.appendChild(innerDiv);
            form.appendChild(div);
        }
    } else if (typeof projectNames === 'string' || projectNames instanceof String) {
        var div = document.createElement('div');
        var h1 = document.createElement('h1');
        h1.innerHTML += "1: " + projectNames + '<br>';
        div.appendChild(h1);

        var h3 = document.createElement('h3');
        h3.innerHTML = `Link: <a href="${videoLinks}">${videoLinks}</a><br>`;
        div.appendChild(h3);

        var p = document.createElement('p');
        p.innerHTML = `<h4>Description: </h4> ${descriptions}`;
        div.appendChild(p);

        form.appendChild(div);
    } else {
        var h1 = document.createElement('h1');
        h1.innerHTML = "This user has no projects yet.";
        form.appendChild(h1);
    }

    return this;
}
// shows all ready projects when u open the ready projects hash
function showAllProjects(allProjects) {
    var template = '<h1 class="project-type-header">Ready Projects </h1>' +
        '<form class="upload-project-form" id="form">' +
        '</form>';

    var container = document.getElementById('page-container');
    container.innerHTML = template;
    var form = document.getElementById('form');
    var projectNumber = 1;

    for (var i = 0; i < allProjects.length; i += 1) {
        var project = allProjects[i];
        var projectDescriptions = project.Description.split(separator);
        var projectNames = project.ProjectName.split(separator);
        var projectVideos = project.VideoLink.split(separator);
        var userName = project._id;

        for (var j = 0; j < projectNames.length; j += 1) {

            var div = document.createElement('div');
            div.className='user-project-div';
            var h1 = document.createElement('h1');
            h1.className='project-header';
            h1.innerHTML = (projectNumber) + ": " + projectNames[j] + '<br>';
            h1.innerHTML += '<p class="project-username">Username: ' + userName + '</p>';
            div.appendChild(h1);
            var innerDiv=document.createElement('div');
            innerDiv.className='user-project-inner-div';

            var link = document.createElement('div');
            link.className="project-link";
            link.innerHTML = `Link: <a href="${projectVideos[j]}" target="_blank" >${projectVideos[j]}</a><br>`;
            innerDiv.appendChild(link);

            var description = document.createElement('div');
            description.className='description-project-div';
            description.innerHTML = `<p>Description: </p> <p class="project-description">${projectDescriptions[j]}</p>`;
            innerDiv.appendChild(description);
            div.appendChild(innerDiv)
            projectNumber += 1;

            form.appendChild(div);
        }
    }

    return template;
}
//shows all not ready projects when u open the progress project hash
function showAllNotReadyProjects(allProjects) {
    var template = '<h1 class="project-type-header">Projects in progress </h1>' +
        '<form class="upload-project-form" id="form">' +
        '</form>';

    var container = document.getElementById('page-container');
    container.innerHTML = template;
    var form = document.getElementById('form');
    var projectNumber = 1;


    for (var i = 0; i < allProjects.length; i += 1) {
        var project = allProjects[i];
        var projectDescriptions = project.Description.split(separator);
        var projectNames = project.ProjectName.split(separator);
        var projectUrl = project.Url.split(separator);
        var projectContacts = project.Contacts.split(separator);
        var userName = project._id;

        for (var j = 0; j < projectNames.length; j += 1) {

            var div = document.createElement('div');
            div.className='user-project-div';
            var h1 = document.createElement('h1');
            h1.className='project-header';
            h1.innerHTML = (projectNumber) + ": " + projectNames[j] + '<br>';
            h1.innerHTML += '<p class="project-username">Username: ' + userName + '</p>';
            div.appendChild(h1);
            var innerDiv=document.createElement('div');
            innerDiv.className='user-project-inner-div';

            var link = document.createElement('div');
            link.className="project-link";
            link.innerHTML = `Link: <a href="${projectUrl[j]}" target="_blank" >${projectUrl[j]}</a><br>`;
            innerDiv.appendChild(link);

            var contacts = document.createElement('div');
            contacts.className='contact-project-div';
            contacts.innerHTML = `<p>Contact me:</p> <p class="project-contacts">${projectContacts[j]}</p><br>`;
            innerDiv.appendChild(contacts);

            var description = document.createElement('div');
            description.className='description-project-div';
            description.innerHTML = `<p>Description: </p> <p class="project-description">${projectDescriptions[j]}</p>`;
            innerDiv.appendChild(description);
            div.appendChild(innerDiv)
            projectNumber += 1;

            form.appendChild(div);
        }
    }

    return template;
}

function errorTemplate() {
    document.body.innerHTML = '';
    var p = document.createElement('p');
    p.style.fontSize = "30px";
    p.innerHTML = 'There is no url with that hash!';
    document.body.appendChild(p);
    var a = document.createElement('a');
    a.innerHTML = 'Return to home page';
    a.href = '../index.html';
    document.body.appendChild(a);
}

export {
    homeTemplate,
    registerTemplate,
    hasUser,
    noUser,
    errorTemplate,
    UploadReadyProjectTemplate,
    UploadProgressProjectTemplate,
    showUserProjects,
    noProjects,
    showAllProjects,
    showAllNotReadyProjects
};