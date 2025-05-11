
// let a = 3
var c =60
// console.log(c);   here value is 60

if (true) {
    let a = 10
    const b = 20
    var c = 30   //var goes out of the scpe

    // console.log("inner value :",a);  //inner value : 10
    
}

// console.log(a);
// console.log(b);
// console.log(c);  //here value is 30 .: don`t use var 


// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
    
// }


//Nested scope 

function one(){
    const username = "anu"

    function two(){
        const web = "yt"
        console.log(username);
        
    }

    // console.log(web);
    two()
    

}
// one()


// if(true){
//     const user = "aniket"
//     if(user === "aniket"){
//         let web = "yt "
//         console.log( web + user);
        
//     }
// }


//****************************************************INTERESTING********************************** */


console.log(add(12));

 function add(num){
    return num + 2
}

console.log(addtwo(12))
const addtwo = function (addtwo){
    return addtwo + 1
}
;

