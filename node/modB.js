module.exports.test = 'B';

const modA = require('./modA');
console.log('modB:',modA.test);
module.exports.test = 'BB';