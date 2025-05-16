const myobject = {
    js :"javascript",
    cpp : "c++",
    rb : "ruby",
    sw : "swift by apple"

}

for (const key in myobject) {
    console.log(`${key} is shortcut for ${myobject[key]}`);
     
}

const arr = [ "js", "cpp", "python", "html","java"]
for(const i in arr){
    console.log(arr[i]);
    
}

// const map = new Map()
// map.set('In',"india")
// map.set('USA',"United States of America")
// map.set('AUS',"Australia")

// for (const i of map){
//     console.log(i);
    
// }

