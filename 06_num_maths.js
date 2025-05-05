const score = 400
// console.log(score);
const balance = new Number(200)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2)); //two nuber after value
const hun = 100000000
// console.log(hun.toLocaleString('en-IN')); //Number in indian style 100,000,000 as o/p

// ===============================+=Maths=+===========================================

// console.log(Math.abs(-4));   op is 4
// console.log(Math.round(4.6));  op is 5 
// console.log(Math.floor(4.9));  o/pis 4
// console.log(Math.min(4,593,857,3,2,0));  op is 0

console.log(Math.random());   //values are between 0 and 1
console.log((Math.random()*10) +1);  //to avoid o and point number we use *10 and +1
console.log(Math.floor(Math.random()*10) +1);

const min =10
const max =20


console.log(Math.floor(Math.random() * (max - min + 1)) + min);