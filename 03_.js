//FOr of


const arr =[1,2,3,4,5]

for (const i of arr){
    // console.log(i);
}

 const greeting = "hello! world"
for(const i of greeting){

    if( i ===" "){
        // console.log("space is detected");
        continue
        
    }
    // console.log('sring is :',i);
    
}

//Maps 

const map = new Map()
map.set('In',"india")
map.set('USA',"United States of America")
map.set('AUS',"Australia")

// console.log(map);

for (const[key,value]of map) {
    // console.log(key, ':-',value);
      
}

// const myObject = {
//     'game1' : "Nfs",
//     'game2'  : "call of duty",
//     'game3'  :"Spiderman"                   

// }
// for(const [key,values] of myObject){        //doest work
//     console.log();
    
// }