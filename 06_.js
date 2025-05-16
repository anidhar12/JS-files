const coding = ["js", "py", "cpp", "c", "C#"]


// const values =   coding.forEach (
//     (item)=>{
//         console.log(item);
//         return item

//     }
// )

// console.log(values);

// *********************************************************************************************************************

// let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let a = num.filter((num) => {
//     return num >= 4 }
// )
// console.log(a);

// *************************************************second W/-\ Y***************************************

// let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let a = num.filter((num) =>  num >4)                  
// console.log(a);

// **************************************************** Thir way *********************************************?
let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let newnum =[]

num.forEach( (num)=>{
    if (num > 4){
        newnum.push(num)
    }
}

)
// console.log(newnum);

// const coding = ["js", "ruby", "java", "python", "cpp"]


// const values = coding.forEach( (item) => {
//     //console.log(item);
//     return item
// } )

// console.log(values);

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter( (num) => {
//     return num > 4
// } )

// const newNums = []

// myNums.forEach( (num) => {
//     if (num > 4) {
//         newNums.push(num)
//     }
// } )

// console.log(newNums);


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let userBooks = books.filter( (bk) => {return bk.genre === 'History'})

//   userBooks = books.filter( (bk) => { 
//    return bk.publish >= 1995 && bk.genre === "History"
// })
  // console.log(userBooks);

  let newbooks = books.filter( (nk)  => nk.genre ==="Non-Fiction" )
  // console.log(newbooks);
  

  let numarry = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
  const numval = numarry.map((newnum)=> {return newnum >= 10})

  console.log(numval);
  