let userData ={
    name: "John",
    age: 30,
    city:"Khammam"
};
console.log(userData,typeof(userData));
console.log(userData.name,typeof(userData));

//js to json conversion

let JsData = JSON.stringify(userData);
console.log(JsData,typeof(JsData));

//json to js conversion

let jsonData = JSON.parse(JsData);
console.log(jsonData,typeof(jsonData));
