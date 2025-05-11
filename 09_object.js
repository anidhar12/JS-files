//Singleton
// Object.create()  this is Constructor method
//object Literals

const mysmb = Symbol("mykey12")

const jsuser ={
    name : "aniket",
    [mysmb] : "SmboKey",
    Age : 22,
    Location:"Mumbai",
    email:"Anidhar@gamil.com",
    Loginn : false ,
    login_day :["mon","thu"]

}

// console.log(jsuser["Age"]);    method to print value from object best on
// console.log(jsuser.Age);        Short method
// console.log(typeof "name");
// console.log(jsuser[mysmb]);

jsuser.Age = 18
// console.log(jsuser);
// Object.freeze(jsuser)    Use to avoid Changes 


jsuser.greeting = function(){
console.log("hello Js User");

}

// console.log(jsuser.greeting());
// console.log(jsuser.greeting);



jsuser.greetingtwo = function(){
    console.log(`hello, ${this.name}`);
    
    }

    console.log(jsuser.greeting());
    console.log(jsuser.greetingtwo());
