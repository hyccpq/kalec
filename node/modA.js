module.exports.test = 'A';
const modB = require('./modB');

console.log('modA:',modB.test);

module.exports.test = 'AA';