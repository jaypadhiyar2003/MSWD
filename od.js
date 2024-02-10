const os= require('os');

console.log(os.arch());
console.log(os.type());
console.log(os.version());
console.log(os.freemem());
i=os.freemem()/1024
console.log(`free ram:${os.freemem()/1024**3} GB`);
console.log(`total ram:${os.totalmem()/1024**3} GB`);
console.log(`Home directory:${os.homedir()} `);
console.log(`Home directory:${os.tmpdir()} `);
console.log(`Name of user:${os.hostname()} `);