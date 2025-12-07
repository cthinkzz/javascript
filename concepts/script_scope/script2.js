import { script1Variable } from './script1.js';

export const script2Variable = 'This is script2.js';
console.log('This is script2 variable', script2Variable);
script1Variable = "Changing script1Variable";
console.log('This is script1 variable', script1Variable);