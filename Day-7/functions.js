// higher order functions

function hof(a) {
    return a;

}
let x = hof(function() {return "Callback function"});
    console.log(x);
let y = function() {return "Callback function"}
    console.log(y);

let users = ['ab', 'bc', 'cd', 'de', 'ef'];
users.map((user) =>{
    console.log(user);
});


let user = ['a', 'b', 'c', 'd', 'e'];
console.log(user[0]);
console.log(user[1]);
console.log(user[2]);
console.log(user[3]);
console.log(user[4]);

var a=10;
let b=20;
function ab(){
    var user = "Deva ";
    let company = "TCS";
    const salary = 100000;
    console.log(user);
    console.log(company);
    console.log(salary);
    console.log(a);
    console.log(b);
}
ab();

function abc(name, company, salary){
    console.log("Name: ",name);
    console.log("Comapny: ",company);
    console.log("Salary: ",salary);
}
abc("Deva", "TCS", 100000);
