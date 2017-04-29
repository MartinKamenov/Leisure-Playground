import { Handlebars } from 'handlebars';

var handlebar = 'my handlebar';

function homeTemplate() {
    var template = "HomeTemplate";
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
        '<button id="submit">Create user</button>' +
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

export { homeTemplate, registerTemplate, errorTemplate };