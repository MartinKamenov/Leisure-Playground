import { Handlebars } from 'handlebars';

var handlebar = 'my handlebar';

function homeTemplate() {
    var template = "HomeTemplate";
    return template;
}

function hasUser() {
    var username = localStorage.getItem('username');

    var template = '<form class="form-horizontal">' +
        '<h1>' +
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
        '<input type="Username" class="form-control" id="" placeholder="Project name">' +
        '</div>' +
        '<div class="form-group">' +
        '<label for="">Repository Link</label>' +
        '<input type="url" class="form-control" id="" placeholder="Repo URL">' +
        '</div>' +
        '<div class="form-group">' +
        '<label for="">How to reach me</label>' +
        '<textarea type="text" class="form-control contact" id="" placeholder="Input information on how someone ' +
        'could contact you in order to discuss your project like an email, skype or your postal code :D">' +
        '</textarea>' +
        '</div>' +
        '<div class="form-group">' +
        '<label for="">Description</label>' +
        '<textarea type="text" class="form-control description" id="" placeholder="Describe your project. Ideas, plot and add a story on how u got to start it and develop it">' +
        '</textarea>' +
        '</div>' +
        '<div>' +
        '<button type="submit" class="btn btn-info upload-project" id="">Upload project</button>' +
        '</div>' +
        '</form>';
    return template;
}

function showUserProjects(userProject) {
    var projectNames = userProject.ProjectName;
    var videoLinks = userProject.VideoLink;
    var descriptions = userProject.Description;
    var template =
        '<h1 class="project-type-header">Ready Projects: </h1>' +
        '<form class="upload-project-form" id="form">' +
        '</form>';

    var container = document.getElementById('page-container');
    container.innerHTML = template;

    for (var i = 0; i < projectNames.length; i += 1) {
        var div = document.createElement('div');
        if (i % 2) {
            div.style.backgroundColor = "lightgrey";
        } else {
            div.style.backgroundColor = "white";
        }
        var h1 = document.createElement('h1');
        h1.innerHTML = i + ": " + projectNames[i] + '<br>';
        div.appendChild(h1);

        var h3 = document.createElement('h3');
        h3.innerHTML = `Link: <a href="${videoLinks[i]}">${videoLinks[i]}</a><br>`;
        div.appendChild(h3);

        var p = document.createElement('p');
        p.innerHTML = `<h4>Description: </h4> ${descriptions[i]}`;
        div.appendChild(p);

        var form = document.getElementById('form');
        form.appendChild(div);
    }

    return this;
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
    showUserProjects
};