//function declaration
//happy birthda song 2 bar print

//console.log("happy birthday song")
//console.log("happy birthday song")
//function a print korbo happy birthday song
/*function songHappyBirthday(){
    console.log('happy birthday song')
}
//unlimited print hobe function a
//function call /invove/run
songHappyBirthday()
songHappyBirthday()*/

// 2+4 print bar bar korbo
/*function toePlusFour(){
    console.log(2+4)
}
toePlusFour()
toePlusFour()*/

//return (function return kore number)
/*function toePlusFour(){
    return(2+4)
}
//console.log(toePlusFour())
const returnValue = toePlusFour(4,6); //function call
console.log(returnValue)*/

//sum two number print (number1,number2)->peramitar
/*function sumTwoNumber(number1,number2){
return number1+number2
}
//function call 
const returnValue = sumTwoNumber(5,5)//(5,5)->argumant value pass kore
console.log(returnValue)*/

//sum Three number print korbo
/*function sunThreeNumber(number1,number2,number3){
    return number1+number2+number3
}
const returnValue = sunThreeNumber(4,5,6)
console.log(returnValue)*/

//isEven //input:1number //output:true,false //first way
/*function isEven(number){
    if(number %2==0){
        return true
    }
        return false  
}
console.log(isEven(3))*/
//2nd way
/*function isEven(number){
    return number %2==0;
}
console.log(isEven(5))*/

//function //input:string //output:firstCharacter
/*function firstCharacter(anyString){
    return anyString[0]
}
console.log(firstCharacter("riajul"))*/

//function// input:array, target (number)  //output:index of target if target present in array
/*function findTarget(array,target){
    for(let i=0;i<array.length;i++){
        if(array[i]=== target){
            return i
        }
    }
    return -1
}
const myArray = [1,3,5,7,9]
const ans = findTarget(myArray,9)
console.log(ans)*/
//odd or even number check
/*function oddOrEven(num){
    if(num%2==0){
        return "even"
    }return "odd"
}
console.log(oddOrEven(2))
console.log(oddOrEven(3))*/

let arr1 = [1,3,5,6]
let arr2 =[3,5,7,8]
let arr3 = [7,9,4]

/*var sum1 = 0
for(let i=0;i<arr1.length;i++){
    sum1 += arr1[i]
}
console.log(sum1)*/
function sumOfArray(arr){
    var sum = 0
    for(let i=0;i<arr.length;i++){
        sum+=arr[i]
    }
    console.log(sum)
}
sumOfArray(arr2)



