import { hashChecker } from 'router';
import { isLoggedIn, processToLogin } from 'usersOptions';
import { uploadReadyProject, uploadProjectInProgress, getUserProject, getAllProjects } from 'projectOptions';

isLoggedIn();
hashChecker();

const separator = '|^|';
/*(function getTopUsers() {
    var allUsers = [];
    getAllProjects().then((data) => {
        for (var i = 0; i < data.length; i += 1) {
            allUsers.push(data[i]);
            console.log(data[i]._id);
        }
        allUsers.sort(function(a, b) {
            return b.ProjectName.split(separator).length - a.ProjectName.split(separator).length;
        });
        var container = document.getElementById('page-container');
        container.innerHTML = '';
        var form = document.createElement('form');
        form.className = "form-horizontal";
        container.appendChild(form);

        var h1 = document.createElement('h1');
        h1.innerHTML = 'Top 5 Users: <br>';

        for (let i = 0; i < 5; i += 1) {
            var div = document.createElement('div');
            div.style.height = '60px';
            div.innerHTML = `No${i+1}: ${allUsers[i]._id}`;
            div.addEventListener('click', () => {

            });
            form.appendChild(div);
        }
    });
})();*/