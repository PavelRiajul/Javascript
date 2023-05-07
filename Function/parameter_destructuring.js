//parameter destructuring

//object used
//react used

const person ={
    firstName:"riajul",
    gender:"male",
    age:22,
}
//normal way amar firstNmae are gender chai
/*function printDetails(obj){
    console.log(obj.firstName)
    console.log(obj.gender)
}
printDetails(person)*/

//  parameter destructuring   amar firstNmae are gender chai
function printDetails({firstName,gender,age}){
    console.log(firstName)
    console.log(gender)
    console.log(age)
}
printDetails(person)