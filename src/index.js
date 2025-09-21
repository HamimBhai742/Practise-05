import { hashPassword } from './bcrypt.js';
import { logError, logInfo, logWarning } from './color.console.js';
import { formateDate } from './date_formate.js';
import { generateId } from './generateId.js';
import add, { multiply, subtract } from './number.js';

// import multiply from "./number.js";
console.log(add(65, 23));
console.log(subtract(25, 13));
multiply(85, 13);

//import from date_formate
console.log(formateDate);

//import from bcrypt
const hasPass = await hashPassword('mypasswot');
console.log(hasPass);

// import { generateId } from './generateId.js';
const id = generateId();
console.log(id)

// import { logInfo, logWarning, logError } from './color.console.js';
logInfo('This is an info message');
logWarning('This is a warning message');
logError('This is an error message');
