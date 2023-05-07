//splice method
//start, delete, insert

const myArray = ["item1","item2","item3"]

//delete
//myArray.splice(1,1)//1(start),1(delete)(item2)=>index number
//console.log(myArray)

//insert new item add hobe
//myArray.splice(1,0,"riajul")//new string add
//console.log(myArray)

//insert and delete
const deletedItem =myArray.splice(1,1,"riajul","rasel")
console.log("deleted item",deletedItem)
console.log(myArray)