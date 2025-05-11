// const tinder = new Object()   both are similar nut 
const tinder = {}
 tinder.name ="Roham"
 tinder.id = 23
 tinder.loc = "nashik"



// console.log(tinder);
const reuser = {
    email : "name @",
    fullname : {
        user:{
            firstname : "aniket",
            lastname : "Dharrao"
        }
    }
}

// console.log(reuser.fullname.user.firstname);

const obj1 = {
    1:"a",2:"b"
}
const obj2 ={
    4: "k", 5:"l"
}

 const reg = Object.assign({},obj1, obj2);   // Without {} traget will be obj1 therfore we use obj1
// console.log(reg === obj1);   output is false

// const reg = Object.assign(obj1, obj2);   
// console.log(reg === obj1);  //output is true without first element as {}
console.log(tinder);

console.log(Object.keys(tinder)); //oup only keys of object
console.log(Object.values(tinder));
console.log(Object.entries(tinder));
console.log(tinder.hasOwnProperty('loc'));


