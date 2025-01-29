console.log("Start")
//global scope
var a =10;
console.log(a);
//local scope

let b = 20;
console.log(b);
//
const c =30;
console.log(c);

//block scope
{
    var a =10;
    console.log(a);

    let n = 200;
    console.log(n);

    const o =300;
    console.log(o);
}
console.log(a);
console.log("End");