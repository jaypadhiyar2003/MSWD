const fs= require("fs");
//let data= "Hello Bro...";
//let data2="hello";
//fs.writeFileSync("output.txt",data);
//fs.renameSync('output.txt','log.txt')

//let inp=fs.readFileSync('log.txt')
//let inp=fs.readFileSync('log.txt','utf-8')
//console.log(inp)
//fs.unlinkSync('log.txt')
//fs.mkdirSync('jp');
//fs.rmdirSync('jp')

let data= "Hello Bro...";
let data2="hello";
let data3="kem party...";

/*fs.writeFile('output.txt',data,(err)=>{
    if (err) throw err;
    console.log("written");
});

fs.appendFile('output.txt',data,(err)=>{
    if (err) throw err;
    console.log("append");
});

fs.readFile('output.txt','utf-8',(err,data)=>{
    if (err) throw err;
    console.log("read");
    console.log(data)
    inp=data
});
console.log('hello');
*/
const {add,sub,mul,div} = require('./arthemetic');

console.log(add);
