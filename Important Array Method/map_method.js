//map method
//map new array banai
//map function return kore

//1st way
/*const numbers = [3,5,7,9,8]
const squre = function(number){
    return number* number
}
const squreNumber = numbers.map(squre)
console.log(squreNumber)*/

//2nd way
/*const numbers = [3,5,7,9,8]
const squreNumber = numbers.map(function(number){
    return number * number
})
console.log(squreNumber)*/

//Arrow function used
const numbers = [3,5,7,9,8]
/*const squreNumber = numbers.map((number) =>{
    return number * number
})*/
/*const squreNumber = numbers.map((number,index) =>{
    console.log(`index: ${index}, ${number * number}`)
})
console.log(squreNumber)*/

//real example
const users =[
    {firstName:"riajul", age:22},
    {firstName:"rasel", age:21},
    {firstName:"eamoly", age:23},
    {firstName:"emran", age:20},
]
const usernames =users.map((user)=>{
    return  user.firstName
})
console.log(usernames)