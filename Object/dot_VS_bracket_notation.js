//diffrence between dot and bracket notation

const person = {
    name:"riajul islam",
    age:22,
    "person hobbies":["india","kashmir","sajeck"]
}
//dot notation worng
//console.log(person.person hobbies)
//dot notation wright
//console.log(person.age)

//bracket notation (space thakle o kono problem nee)
//console.log(person["person hobbies"])

//person object a key value add korbo(bracket notation hobe)
const key = "email"
//dot notation hobe na
//person.key="riajulpislam@gmail.com"
//bracket notation hobe
person[key]="riajulpislam@gmail.com"
console.log(person)