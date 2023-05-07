//rest parameters

/*function myFunc(a,b,c,d){
    console.log(`a is ${a}`)
    console.log(`b is ${b}`)
    console.log(`c is ${c}`)
    console.log(`d is ${d}`)
}
myFunc(3,4,5,6,7,8,9)*/

//a=1,b=2,c=3, kinto de er betor(6,7,8,9) thakbe rest peremeter er sahajje korbo 
/*function myFunc(a,b,c,...d){
    console.log(`a is ${a}`)
    console.log(`b is ${b}`)
    console.log(`c is ${c}`)
    console.log(`d is `,d)
}
myFunc(3,4,5,6,7,8,9)*/

//sum numbers
function addAll(...numbers){
    let total = 0
    for(Number of numbers){
        total += Number
    }
    return total
}
const ans = addAll(3,4,5,4,5)
console.log(ans)