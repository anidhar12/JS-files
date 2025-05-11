


function myname (){
    
console.log("A");
console.log("N");
console.log("I");
console.log("k");
console.log("E");
console.log("T");

}

// myname()  use to Execute

// function twonumadd(num1 ,num2){   // here Num1 & num2 is Parmeters
//     console.log(num1 + num2);
    
// }
// twonumadd(3,7) //here its call arguments


function twonumadd(num1 ,num2){   // here Num1 & num2 is Parmeters
    let ans = num1 + num2
    // console.log("q");
    
    return ans;
    
}
// 
// const ans = twonumadd(3,7)
const ans = twonumadd(10,12)
// console.log("Answer :",ans);


function loginmess( username ){ 
    if(username === undefined){
        console.log("please enter Username");
        return

    }


    return `${username} just login`
}



console.log(loginmess());






