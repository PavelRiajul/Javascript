//some method

//const numbers = [3,5,9,4]
//numbers array er betor akta number even hole //true
/*const ans = numbers.some((number)=>number%2===0);
console.log(ans)*/

//real life example
const userCart = [
    {productId:1, productName:"mobile", price:12000},
    {productId:2, productName:"laptop", price:22000},
    {productId:3, productName:"tv", price:15000},
    {productId:4, productName:"mathine", price:15000},
]
//all product 100000 se boro
const ans =userCart.some((cartItem)=>cartItem.price>100000);
console.log(ans)