const cal=require('./calc');
const ti=require('./time');
console.log("Welcome to "+ti.companyName+" Today : "+ti.currTime)
ti.sayHello()
let x=50,y=10;
console.log("add" + cal.add(x,y));
console.log("sub" + cal.sub(x,y));
console.log("mul" + cal.mul(x,y));
console.log("div" + cal.div(x,y));