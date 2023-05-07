//clone using object.assign
//heap memory
const obj ={
    key1: "value1",
    key2: "value2"
}

//const obj2 = {...obj}
const obj2 = Object.assign({},obj)//assign
obj.key3 = "value3"//obj se new value add

console.log(obj)
console.log(obj2)