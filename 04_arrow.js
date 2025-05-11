const user ={
    username : "aniket",
    price: 999,
    WelcomeMessage : function(){
        console.log(`${this.username}, Welocome to Web  for ${this.price}`);
        console.log(this);
        

    }
}
// user.WelcomeMessage()
// // console.log(`${this.username}`);  o/p as undefined\
// user.username = "anny"
// user.WelcomeMessage()

// function chai(){
// let username = "shu"    
// console.log(this.username);
// }
// chai()

// const chai = function(){
//     let username = "jenny"
//     console.log(this.username);
    
// }


// const chai =  () =>{
//     let username = "jenny"
//     console.log(this);
    
// }


// chai
const addtwo=  (num1, num2 )=> {
    return num1+num2
}
// console.log(addtwo(3,5));



// const addnum=  (num1, num2 ) =>  ( num1 + num2)
   
// console.log(addtwo(3,5));  0/p is 8


// let name = (username, value) => ({username: "kl"})
// console.log(name("j","h"));


let name = () => ({username: "kl"})
console.log(name());








