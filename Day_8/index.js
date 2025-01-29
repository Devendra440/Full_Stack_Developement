function x(){
    let a=10;
    const b=20;
    console.log(a,b);
    function y(){
        let p='js';
        var q='python';
        console.log(p,q);
        function z(){
            const username='sachin';
            console.log(username);
            console.log(a);
            console.log(b);
        }
        x();
    }
    y();
}
x();                                                                                  

// function x(){
//     function y(){
//         let p='js';
//         var q='python';
//         console.log(p,q);
//         function z(){
//             const username='sachin';
//             console.log(username);
//             console.log(a);
//             console.log(b);
//         }
//         z();
//     }
//     y();
// }
// x();