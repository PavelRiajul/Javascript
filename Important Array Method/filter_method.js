//filter method
//new array banay

//even or Odd number check
//1st way
/*const numbers = [1,2,3,5,7,8,9]
const isEven=function(number){
    return number%2===1;
}
const evenNumber= numbers.filter(isEven)
console.log(evenNumber)*/

//2nd way
const numbers = [1,2,3,5,7,8,9,10]
const evenNumber = numbers.filter((number) =>{
    return number%2===0
})
console.log(evenNumber)


