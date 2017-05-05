import { hashChecker } from 'router';
import { isLoggedIn, processToLogin } from 'usersOptions';
import { uploadReadyProject, getUserProject } from 'projectOptions';

isLoggedIn();
hashChecker();
//getUserProject();