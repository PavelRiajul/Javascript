//array destructuring
// 2 ta value 2 ta variable a  stor kormo normal way
//const myArray = ["value1","value2"]
/*let myvar1 = myArray[0]
let myvar2 = myArray[1]
console.log("value of myvar1",myvar1)
console.log("value of myvar2",myvar2)*/

//array destructuring
/*const myArray = ["value1","value2","value3"]
let[myvar1,myvar2,myvar3]=myArray
console.log("value of myvar1",myvar1)
console.log("value of myvar2",myvar2)
console.log("value of myvar3",myvar3)*/

//value1 and value3 print hobe ae way te
/*const myArray = ["value1","value2","value3"]
let[myvar1, ,myvar2]=myArray
console.log("value of myvar1",myvar1)
console.log("value of myvar2",myvar2)*/

//value3 and value4 print hobe
/*const myArray = ["value1","value2","value3","value4"]
//1st way
let myNewArray = myArray.slice(2)
let[myvar1,myvar2,]=myArray
console.log("value of myvar1",myvar1)
console.log("value of myvar2",myvar2)
console.log(myNewArray)*/

//value3 and value4 2nd way
/*const myArray = ["value1","value2","value3","value4"]
let[myvar1,myvar2,...myNewArray]=myArray
console.log("value of myvar1",myvar1)
console.log("value of myvar2",myvar2)
console.log(myNewArray)*/