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
    var template = "<div id='register'>" +
        '<label>Uesrname: </label>' +
        '<input id="username"></input>' +
        '<br>' +
        '<label>Password: </label>' +
        '<input id="password" type="password"></input>' +
        '<br>' +
        '<button id="register-button">Create user</button>' +
        '</div>';
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

export { homeTemplate, registerTemplate, hasUser, noUser, errorTemplate };