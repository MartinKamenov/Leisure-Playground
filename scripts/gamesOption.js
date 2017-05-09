import { hasLoggedIn, appKey, appSecret, kinveyUrl } from 'usersOptions';

function processToCreateGame() {
    var container = document.getElementById('page-container');
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

export { processToCreateGame, getAllGames }