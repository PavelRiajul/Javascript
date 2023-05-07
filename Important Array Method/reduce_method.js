//reduce method

/*const numbers = [3,5,6,8,9]
//ail:sum of all numbers in array
const sum = numbers.reduce((accumulator,currentValue)=>{
    return accumulator + currentValue
})
console.log(sum)*/

//accumulator,  currentvalue,  return
//3               5             8
//8               6             14
//14              8             22
//22              9             31

//real life example all price sum
const userCart = [
    {productId:1, productName:"mobile", price:12000},
    {productId:2, productName:"laptop", price:22000},
    {productId:3, productName:"tv", price:15000},
]
const totalAmount = userCart.reduce((totalPrice,currentProduct)=>{
    return totalPrice+currentProduct.price 

},0)//innisshile value 0 theke soro
console.log(totalAmount)

//totalPrice     currentvalue   return
//0                 {}            12000
//12000             22000         34000
//34000             15000         49000
