/*
argv
argv0
execArgv
execPath
*/
const {argv,argv0,execArgv,execPath,env} = process;

argv.forEach(item => {
    console.log(item);
});

console.log(argv0);
console.log(execArgv,execPath);
console.log(env);

