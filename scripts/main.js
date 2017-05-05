import { hashChecker } from 'router';
import { isLoggedIn, processToLogin } from 'usersOptions';
import { uploadReadyProject, uploadProjectInProgress, getUserProject, getAllProjects } from 'projectOptions';

isLoggedIn();
hashChecker();
/*
if you are logged in you can upload like this

const project = {
    whoDidThis: "someone",
    sorce_code: "some code"
};
uploadReadyProject(project);*/


//getUserProject();