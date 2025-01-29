// let p1 = new Promise((resolve, reject) => {}); // Pending

// let p2 = new Promise((resolve, reject) => {
//     resolve('success');
// });
// console.log(p2); // Promise { 'success' }
// p2.then(res) => {
//     console.log(res); // success
// }
// let p3 = new Promise((resolve, reject) => {
//     reject('failures');
// });

// p3
// .then(res=> console.log(res))
// .catch(err => console.log(err))
// .finally(() => console.log('Finally'));

// ! Api Fetch

function fetchUsers() {
    let response = fetch('https://jsonplaceholder.typicode.com/users');
    //console.log(response); // Promise { <pending> }
    response.then(res =>{
        // console.log(res); // Response { type: "cors", url: "https://jsonplaceholder.typicode.com/users", redirected: false, status: 200, ok: true, … }
        // return res.json();
        return res.json().then(data =>{
            console.log(data);
        })
        .catch(err => console.log(err));
    })
    .catch(err => console.log(err));
}
fetchUsers();
