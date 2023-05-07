//default parameters

/*function addTwoNumber(a,b){
    return a+b
}
const ans = addTwoNumber(3,4)
console.log(ans)*/

//2nd argument pass korbo na
//1st way
/*function addTwoNumber(a,b){
    if(typeof b=== "undefined"){
        b=0
    }
    return a+b
}
const ans = addTwoNumber(3,9)
console.log(ans)*/

//2nd way
function addTwoNumber(a,b=0){
    return a+b
}
const ans = addTwoNumber(3)
console.log(ans)