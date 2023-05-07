//every method

//const numbers =[2,4,6,8,10]
//every return korbe even hole sob even number and odd hole sob odd number
/*function isEven(number){
    return number%2===0
}*/
//const ans = numbers.every((number)=>number%0===0)
//callback function ==> true / false(boolean)
//every method ==> true / false(boolean)
//console.log(ans)

//real life example
const userCart = [
    {productId:1, productName:"mobile", price:12000},
    {productId:2, productName:"laptop", price:22000},
    {productId:3, productName:"tv", price:15000},
]
// check every product <30000 thelke kom
const ans =userCart.every((cartItem)=>cartItem.price<30000)
console.log(ans)