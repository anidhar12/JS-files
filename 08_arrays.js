const Grils =["simran","sara","beboo","asha","anushka"]
const Boys =["srk","kartik","saf","abhi","virat"]
//Grils.push(Boys)
// console.log(Grils);

const Allcast= Grils.concat(Boys)
//console.log(Allcast);

const sparray =[1,2,3,[3,5,6],7,[6,7,[4,5]]]

const real_one =sparray.flat(Infinity)
//console.log(real_one);

let score1= 200;
let score2 =300;
let score3 =400;

// console.log(Array.of(score1,score2,score3,real_one));
console.log(Array.isArray("Aniket"))
console.log(Array.from("Aniket"))

console.log(Array.isArray("A"))

console.log(Array.from({name :"aniket"})); //interating gave empty

