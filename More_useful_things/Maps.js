//maps
//map is an iterable
//store data in ordered fashion

//object literal
//key->string (90%)
//key->symbol

/*const person = {
    firstName:"riajul",
    age:7,
    1:"one"
}*/
//console.log(person.firstName)
//console.log(person["firstName"])
//console.log(person["1"])
/*for(let key in person){
    console.log(typeof key)
}*/

//map key value pair store kore
/*const person = new Map();
person.set("firstName","riajul")
person.set(1,"one")
//console.log(person)
//console.log(person.firstname)//undefind
//console.log(person["firstname"])//undefind
//console.log(person.get("firstName"))//wright

//for of loop chalabo
for(let key of person.keys()){
    console.log(key,typeof key)
}*/

//deract arra add map se
/*const person = new Map([["firstname","riajul"],["age",22]])
console.log(person)*/

//object
const person1 = {
    id:1,
    firstName:"riajul islam"
}
const person2 = {
    id:1,
    firstName:"riajul islam"
}
const userInfo = new Map();
userInfo.set(person1,{age:8,gender:"male"})
userInfo.set(person2,{age:8,gender:"female"})
//console.log(userInfo)
console.log(person1.id)
console.log(userInfo.get(person1).gender)//gender
console.log(userInfo.get(person2).gender)//gender chai

