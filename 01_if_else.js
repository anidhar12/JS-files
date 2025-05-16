// if Statement

// const tem = 56

// if(tem <50){
//     console.log("Tem is less then 50");   

// }
//  else{
// console.log("temperature is greater than 50");
//  }

// **************************************************************************************************

//  const score =200

//  if (score >100){
//    let power ="fly"
//     console.log(`user power : ${power}` );
    
//  }
//     console.log(`user power : ${power}` );  // power only excuter inside the scope only

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++?

const balance =1000

// if(balance > 500) console.log("test1"), console.log("test2");

// /////////////////////////////////////////////////////////////////////////////////////////////////////////8


// let marks = 67; // You can change this value to test different scenarios

// if (marks >= 90) {
//     console.log("Grade: A+");
// } else if (marks >= 80) {
//     if (marks >= 85) {
//         console.log("Grade: A");
//     } else {
//         console.log("Grade: A-");
//     }
// } else if (marks >= 70) {
//     if (marks >= 75) {
//         console.log("Grade: B+");
//     } else {
//         console.log("Grade: B");
//     }
// } else {
//     console.log("Grade: C (Needs Improvement)");
// }

// **********************   logical Oprators *********************************
let login = true
let debitcard = false

if(login && debitcard){  //To excute both shoud be true 
    console.log("login Sucessfully");
    
}

if(login || debitcard){ //Only one also sufficent to execute if by using or 
    console.log("Or statement sucess");
    
}