import { hashChecker } from 'router';
import { processToRegister, processToLogin } from 'usersOptions';

hashChecker();
processToRegister();
processToLogin();