import { hasLoggedIn, appKey, appSecret, kinveyUrl } from 'usersOptions';

var container = document.getElementById('page-container');

function createGame(game) {
    const username = localStorage.getItem('username');
    const authToken = localStorage.getItem('auth-token');
    $.ajax({
        url: `${kinveyUrl}/appdata/${appKey}/games/${username}`,
        method: 'PUT',
        headers: {
            Authorization: `Kinvey ${authToken}`
        },
        data: JSON.stringify(game),
        contentType: 'application/json',
        success: (returned) => { alert('Successfully uploaded game') },
        error: () => alert("failed creating project!")
    });
}

function getAllGames() {
    const authToken = localStorage.getItem('auth-token');
    const username = localStorage.getItem('username');

    return new Promise((resolve, reject) =>
        $.ajax({
            url: `${kinveyUrl}/appdata/${appKey}/games`,
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

function playGame(gameName, sourceCode) {
    const newPlace = 'var container = document.getElementById("page-container");' +
        'container';
    container.innerHTML = '';

    while (true) {
        if (sourceCode.indexOf("document.body") === -1) {
            break;
        }
        sourceCode = sourceCode.replace("document.body", newPlace);
    }

    var script = document.createElement('script');
    script.innerHTML = sourceCode;
    container.appendChild(script);
}

function testCode() {
    const replacePart = "console.log";
    const replacingPart = "var myConsole = document.getElementById('Console'); myConsole.value = ";
    container.innerHTML = '';
    var jsCodeContainer = document.createElement('textarea');
    jsCodeContainer.id = 'JsCode';
    var readyButton = document.createElement('button');
    readyButton.id = 'Ready';
    readyButton.innerText = 'Javascript is Ready';

    container.appendChild(jsCodeContainer);
    container.appendChild(readyButton);
    container.innerHTML += '<br>' +
        '<label>Console (Read Only):</label><br>' +
        '<textarea id="Console"></textarea>';
    var myConsole = document.getElementById('Console');
    document.getElementById('Ready').addEventListener('click', () => {
        var jsCode = document.getElementById("JsCode").value;
        if (jsCode) {
            while (true) {
                if (jsCode.indexOf(replacePart) < 0) {
                    break;
                }
                jsCode = jsCode.replace(replacePart, replacingPart);
            }
            var myscript = document.createElement("script");
            myscript.innerHTML = jsCode;
            myConsole.appendChild(myscript);
            document.getElementById("JsCode").value = "";
        }
    });
}

export { getAllGames, playGame, testCode, createGame }