const myNums =[1,2,3]

// const mytotal = myNums.reduce(function(acc,curval) {
//      console.log(`acc is ${acc} and curval is ${curval}`);
     
//     return acc+curval
// },0)/


const mytotal = myNums.reduce((acc,curval) =>{
    return acc+curval
},0)

// console.log(mytotal);


const onlinecoure = [
    {
        iteamname : "Mathematics",
        CoursePrice: 14999
    },
    {
        iteamname : "Digital Logic",
        CoursePrice: 18999
    },
    {
        iteamname : "C Programming ",
        CoursePrice: 7999
    },
    {
        iteamname : "DBMS",
        CoursePrice: 1000
    },
     {
        iteamname : "TOC",
        CoursePrice: 2390
    }
]

let totalamt = onlinecoure.reduce( (acc,curval) => {
    return  acc+ curval.CoursePrice},0)
console.log(totalamt);
