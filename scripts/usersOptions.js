import { jQuery } from 'jQuery';

function processToRegister() {
    var btn = document.getElementById("register-button");
    btn.addEventListener("click", () => {
        const username = $('#username').val();
        const password = $('#password').val();
        if (username.length > 2 && password.length > 5) {
            register(username, password);
        } else {
            console.log('Username or password too short!');
        }
    });
}

function processToLogin() {
    var btn = document.getElementById("login-button");
    btn.addEventListener("click", () => {
        const username = $('#username').val();
        const password = $('#password').val();

        login(username, password);
    });
}

function register(username, password) {
    const user = {
        username,
        password
    }

    $.ajax({
        url: 'https://baas.kinvey.com/user/kid_B1F_NepCe',
        method: 'POST',
        headers: {
            Authorization: `Basic ${btoa('kid_B1F_NepCe' + ':' + 'ecb4db62af65485b966a2a63e4940008')}`
        },
        data: JSON.stringify(user),
        contentType: 'application/json',
        success: (data) => alert('user registered!'),
        error: () => alert("failed registering!")
    });
}

function login(username, password) {
    const user = {
        username,
        password
    }

    $.ajax({
        url: 'https://baas.kinvey.com/user/kid_B1F_NepCe/login',
        method: 'POST',
        headers: {
            // Kinvey localStorage.getItem('auth-toke');
            Authorization: `Basic ${btoa('kid_B1F_NepCe' + ':' + 'ecb4db62af65485b966a2a63e4940008')}`
        },
        data: JSON.stringify(user),
        contentType: 'application/json',
        success: (data) => {
            localStorage.setItem('auth-token', data._kmd.authtoken);
            localStorage.setItem('username', data.username);
        },
        error: () => alert("failed login!")
    });
}

export { processToRegister, processToLogin };