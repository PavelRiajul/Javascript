// computed properties

const key1 = "objKey1";
const key2 = "objKey2";

const value1 = "myValue1"
const value2 = "myValue2"

/*const obj={
    objKey1:'myValue1',
    objKey2:'myValue2'
}
console.log(obj)*/
//amar lagbe value objkey1-myValue1 and objkey2-myValue2
//wrong ans
/*const obj={
    key1:value1,
    key2:value2
}
console.log(obj)*/
//1st way
/*const obj={
    [key1]:value1,
    [key2]:value2
}
console.log(obj)*/
//2nd way
const obj = {}
obj[key1]=value1
obj[key2]=value2
console.log(obj)