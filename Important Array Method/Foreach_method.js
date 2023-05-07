//important array method

//forEach
//map
//filter
//reduce

/*const nembers =[4,2,5,8]

function multyplyBy(number,index){
    console.log("index is",index)
    console.log(number*2)
    
}*/
//multyplyBy(nembers[0],0)
//multyplyBy(nembers[1],1)

///array te for loop use
/*for(let i =0;i<nembers.length;i++){
    multyplyBy(nembers[i],i)
}*/

//same programe forEach use forEach use korle for loop er dorkar hoi na
//forEach Argument pass kore
//1st way
/*const nembers =[4,2,5,8]
function multyplyBy(number,index){
    console.log(`index is${index} numbers is${number}`)
}
nembers.forEach(multyplyBy)*/

//2nd way
/*const numbers =[4,2,5,8]
numbers.forEach(function(number,index){
    console.log(`index is${index} number is ${number}`)
})*/

//array multiply
/*const numbers =[4,2,5,8]
numbers.forEach(function(number,index){
    console.log(number*2,index)
})*/

/*const users =[
    {firstName:"riajul", age:22},
    {firstName:"rasel", age:21},
    {firstName:"eamoly", age:23},
    {firstName:"emran", age:20},
]*/
//sobgola object er modde sobgola first name chai
//forEach use
/*users.forEach(function(user){
    console.log(user.firstName)
})*/

//Arrow function used
/*users.forEach((user,index)=>{
    console.log(user.firstName,index)
})*/

//for loop use
/*for(user of users){
    console.log(user.firstName)
}*/


const users =[
    {firstName:"riajul", age:22},
    {firstName:"rasel", age:21},
    {firstName:"eamoly", age:23},
    {firstName:"emran", age:20},
]

users.forEach(function(user){
    console.log(user.firstName)
})



