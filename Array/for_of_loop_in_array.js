//for of loop in array

const fruits = ["apple","mango","grepes"]
const fruits2 = []
//traditional for loop
/*for(let i =0;i<fruits.length;i++){
    console.log(fruits[i])
}*/

//for of loop
for( let fruit of fruits){
    fruits2.push(fruit.toUpperCase())
}
console.log(fruits2)