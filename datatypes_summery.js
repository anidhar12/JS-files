// # primitive
//7 types: String, Number, boolean ,Null, undefined, Symbol, BigInt




// let x = 10;       // x is a number
// x = "Hello";      // Now x is a string
// x = true;         // Now x is a boolean
 //Dynamic Typing: The type of a variable is determined at runtime, not at compile time. You don't need to specify the type of a variable when declaring it.
// let userEmail; // undefined

const id = Symbol("123")
const id2 = Symbol("123")
console.log(id === id2); //output: false


// Non-primitive (Refrence)
// arrays,Objects,Fuctions

//array
const nums =[1,2,3,4,5];

let myobject ={
    name:"aniket",
    age:22,
}

const myfunction = function(){
    console.log("hello! world");
    
}


console.log( typeof

myfunction

);

// Primitive Data Types
let str = "Hello, World";           // String
let num = 42;                       // Number
let bigInt = 12345678901234567890n; // BigInt
let bool = true;                    // Boolean
let undef;                          // Undefined
let empty = null;                   // Null
let sym = Symbol("unique");         // Symbol

// Non-Primitive (Object) Data Types
let obj = { name: "Alice", age: 25 }; // Object
let arr = [1, 2, 3, 4, 5];            // Array
function greet() {                    // Function
  return "Hello!";
}
let date = new Date();                // Date

// Special Data Types
let infinity = Infinity;             // Infinity
let nan = "abc" /2;                 // NaN

// Logging each type and its value
console.log("String:", str, "Type:", typeof str);
console.log("Number:", num, "Type:", typeof num);
console.log("BigInt:", bigInt, "Type:", typeof bigInt);
console.log("Boolean:", bool, "Type:", typeof bool);
console.log("Undefined:", undef, "Type:", typeof undef);
console.log("Null:", empty, "Type:", typeof empty); // Historical bug: "object"
console.log("Symbol:", sym, "Type:", typeof sym);

console.log("Object:", obj, "Type:", typeof obj);
console.log("Array:", arr, "Type:", typeof arr);
console.log("Function:", greet, "Type:", typeof greet);
console.log("Date:", date, "Type:", typeof date);

console.log("Infinity:", infinity, "Type:", typeof infinity);
console.log("NaN:", nan, "Type:", typeof nan);

//========================================================================================

// Stack memrory is for  (Primitive), & Heap memrory for ( non primitive)

let myyoutubename ="nashikclasickar"