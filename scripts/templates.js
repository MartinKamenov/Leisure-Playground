import { Handlebars } from 'handlebars';

var handlebar = 'my handlebar';

function homeTemplate() {
    var template = "HomeTemplate";
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

export { homeTemplate, errorTemplate };