import { hasLoggedIn, appKey, appSecret, kinveyUrl } from 'usersOptions';

var container = document.getElementById('page-container');

function processToCreateGame() {

    container.innerHTML = '';

    container.innerHTML = '<label for="">Game Name: </label>' +
        '<input id="gameName"><br>' +
        '<label for="">Source Code</label>' +
        '<textarea id="sourceCode"></textarea><br>' +
        '<button type="" id="createGameButton">Create Game</button>';

    var btn = document.getElementById('createGameButton');
    btn.addEventListener('click', () => {
        var gameName = $('#gameName').val();
        var sourceCode = $('#sourceCode').val();

        const game = {
            gameName: gameName,
            sourceCode: sourceCode
        };

        createGame(game);
    });
}

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
        success: (returned) => {},
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
    container.innerHTML = '';
    var jsCodeContainer = document.createElement('textarea');
    jsCodeContainer.id = 'JsCode';
    var readyButton = document.createElement('button');
    readyButton.id = 'Ready';
    readyButton.innerHTML = 'Javascript is Ready';
    container.appendChild(jsCodeContainer);
    container.appendChild(readyButton);
    container.innerHTML += '<br>' +
        '<label>Console (Read Only):</label><br>' +
        '<textarea id="Console"></textarea>';

}

export { processToCreateGame, getAllGames, playGame, testCode }