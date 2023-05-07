//sort
//sort method  orginal Arry ke change kore


//5,9,1200,400,3000 ae number gula ke sort korbo

/*const numbers = [5,9,1200,400,3000]
//["5","9","1200","400","3000"]
//[53,57,49,52,51]=>Ackii value
numbers.sort()
console.log(numbers)*/

// first a capital letter sort korbe and pore small letter
/*const username = ["riajul","Yeamoly","fahim"]
username.sort()
console.log(username)*/

/*[5,9,1200,400,3000] ae number gula sort korbo
result ashbe [5,9,400,1200,300]=> sandingorder a sort desanding order hobe (b-a)*/
/*const numbers = [5,9,1200,400,3000]*/
/*numbers.sort((a,b)=>{
    return a-b
})*/
/*numbers.sort((a,b)=>a-b)
console.log(numbers)*/

//real life example sort
const products=[
    {productId: 1, productName:"p1",price: 300},
      {productId: 2, productName:"p2",price: 210},
        {productId: 3, productName:"p3",price: 1200},
          {productId: 4, productName:"p4",price: 530},
]

//low to high
 /*const lowToHigh =products.slice(0).sort((a,b)=>{
    return a.price-b.price
})
console.log(lowToHigh)*/

//high to low
const highTolow =products.slice(0).sort((a,b)=>{
    return b.price-a.price
})
console.log(highTolow)