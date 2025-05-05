
let mydates = new Date()
console.log(mydates);
console.log( typeof mydates);

let createdate= new Date (2023 ,0, 23, 5,3)
console.log(createdate.toLocaleString());
console.log(createdate.getMonth()+1); // to get moth in date



let mytimestamp =  Date.now()
console.log(mytimestamp);

let newDate = new Date()
newDate.toLocaleString("default", 
    {
       weekday : "long" 
    }
)





