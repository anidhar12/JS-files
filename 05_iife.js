//immediately Invoked Function Expression (IIFE)

// Without IIFE
var count = 0;
function increment() {
    count++;
}
increment();
console.log(count); // 1
// If another script also uses `count`, there can be conflicts.

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>



// With IIFE
(function() {
    var count = 0; // Scoped to this function
    function increment() {
        count++;
        console.log(count);
    }
    increment(); // 1
    increment(); // 2
})();
// The `count` and `increment` here don't affect the global scope.

// .............................................................................................................................................


(function chai(){
    console.log(`DB CONNECTE`); //this is named IIFE
    
})();        //USED ; FOR USIG MULTIPLE IIFE IN SINGLE FILE

( (name) => {
    console.log(`DB TWO IS CONNECTED ${name}`);
    
})("aniket") //iifi using  arrow function

//IIFE IS USE TO AVOID DUSTRUBUNCE OF GOLBAL VARIABLE