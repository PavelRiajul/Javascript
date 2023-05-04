// how to iterate object

const person = {
    name:"riajul islam",
    age:22,
    "person hobbies":["india","kashmir","sajeck"]
}

//object ke iterate korar jonn 2 way bebohar korbo
//1:for in loop
//2:object.keys

//for in loop
/*for(let key in person){
    //result ashbe sodu key
    //console.log(key)
    //result ashbe sodu value
    //console.log(person[key])
    //jodi key value pair chai
    //1st way
    //console.log(`${key}:${person[key]}`)
    //2nd way
    //console.log(key, ":", person[key])
}*/

//object.keys
 /*console.log( typeof Object.keys(person));
 const value= Array.isArray((Object.keys(person)))
 console.log(value)*/

 for(let key of Object.keys(person)){
    console.log(key,":",person[key])
 }
