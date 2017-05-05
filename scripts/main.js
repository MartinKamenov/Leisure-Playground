import { hashChecker } from 'router';
import { isLoggedIn, processToLogin } from 'usersOptions';
import { uploadReadyProject, uploadProjectInProgress, getUserProject, getAllProjects } from 'projectOptions';

isLoggedIn();
hashChecker();