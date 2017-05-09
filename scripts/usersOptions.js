import { jQuery } from 'jQuery';
import { hasUser, noUser } from 'templates';
import { getAllProjects } from 'projectOptions';

const appKey = "kid_B1F_NepCe";
const appSecret = "ecb4db62af65485b966a2a63e4940008";
const kinveyUrl = "https://baas.kinvey.com";
const separator = '|^|';

function isLoggedIn() {
    var username = localStorage.getItem('username');
    if (username) {
        var registrationForm = document.getElementById('registration-form');
        registrationForm.innerHTML = hasUser();
        var userName = document.getElementById('user');
        userName.style.fontFamily = "Impact, Charcoal, sans-serif";

        var userImg = document.getElementById('profileHomeButton');
        userImg.src = '../images/userProfileButton.png';
        userImg.style.width = '50px';
        userImg.style.height = '50px';
        userImg.addEventListener('click', () => {
            window.location.hash = "#show-user-projects";
        });

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

function hasLoggedIn() {
    var username = localStorage.getItem('username');
    if (username) {
        return true;
    } else {
        return false;
    }
}

function processToRegister() {
    var btn = document.getElementById("register-button");
    btn.addEventListener("click", () => {
        const username = $('#register-username').val();
        const password = $('#register-password').val();

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
        url: kinveyUrl + '/user/' + appKey,
        method: 'POST',
        headers: {
            Authorization: `Basic ${btoa(appKey + ':' + appSecret)}`
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
        url: kinveyUrl + '/user/' + appKey + '/login',
        method: 'POST',
        headers: {
            // Kinvey localStorage.getItem('auth-toke');
            Authorization: `Basic ${btoa(appKey + ':' + appSecret)}`
        },
        data: JSON.stringify(user),
        contentType: 'application/json',
        success: (data) => {
            localStorage.setItem('auth-token', data._kmd.authtoken);
            localStorage.setItem('username', data.username);
            isLoggedIn();
            window.location.hash = "#show-user-projects"
        },
        error: () => {
            alert("failed login!");
            localStorage.clear();
            isLoggedIn();
        }
    });
}

function getTopUsers() {
    var allUsers = [];
    getAllProjects().then((data) => {
        for (var i = 0; i < data.length; i += 1) {
            allUsers.push(data[i]);
        }
        allUsers.sort(function(a, b) {
            return b.ProjectName.split(separator).length - a.ProjectName.split(separator).length;
        });
        var container = document.getElementById('page-container');
        container.innerHTML = '';
        var form = document.createElement('form');
        container.appendChild(form);

        var h1 = document.createElement('h1');
        h1.innerHTML = 'Top 5 Users: <br>';
        form.appendChild(h1);

        if (allUsers.length < 5) {
            var till = allUsers.length;
        } else {
            var till = 5;
        }

        for (let i = 0; i < till; i += 1) {
            var div = document.createElement('div');
            div.style.height = '60px';
            div.innerHTML = `<h1>No${i+1}: ${allUsers[i]._id}</h1>`;
            div.addEventListener('click', () => {

            });
            form.appendChild(div);
        }
    });
}

export { isLoggedIn, hasLoggedIn, processToRegister, processToLogin, appKey, appSecret, kinveyUrl, getTopUsers };