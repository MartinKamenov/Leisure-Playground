import { jQuery } from 'jQuery';
import { hasUser, noUser } from 'templates';

function isLoggedIn() {
    var username = localStorage.getItem('username');
    if (username) {
        var registrationForm = document.getElementById('registration-form');
        registrationForm.innerHTML = hasUser();

        const logoutButton = document.getElementById('logout-button');
        logoutButton.addEventListener('click', () => {
            localStorage.clear();
            isLoggedIn();
            window.location.hash = "#home";
        });
    } else {
        var registrationForm = document.getElementById('registration-form');
        registrationForm.innerHTML = noUser();
        var registerButton = document.getElementById('register');
        registerButton.addEventListener('click', () => {
            window.location.hash = "#register";
        });
        processToLogin();
    }
}

function processToRegister() {
    var btn = document.getElementById("register-button");
    btn.addEventListener("click", () => {
        const username = $('#register-username').val();
        const password = $('#register-password').val();
        console.log(username);
        console.log(password);
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
        success: (data) => {
            alert('User Registered!');
            localStorage.setItem('auth-token', data._kmd.authtoken);
            localStorage.setItem('username', data.username);
            isLoggedIn();
            window.location.hash = "#home";
        },
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
            isLoggedIn();
        },
        error: () => {
            alert("failed login!");
            localStorage.clear();
            isLoggedIn();
        }
    });
}

export { isLoggedIn, processToRegister, processToLogin };