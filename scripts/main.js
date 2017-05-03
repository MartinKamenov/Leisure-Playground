import { hashChecker } from 'router';
import { isLoggedIn, processToLogin } from 'usersOptions';

isLoggedIn();
hashChecker();