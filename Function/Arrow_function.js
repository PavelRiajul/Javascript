//arrow function

//function Expression
/*const songHappyBirshday =function(){
    console.log("happy birthday")
}*/
//arrow function
/*const songHappyBirshday =() =>{
    console.log("happy birthday")
}
songHappyBirshday()*/

//function Expression
/*const sumThreeNumber = function(number1,number2,number3){
    return number1+number2+number3
}*/
//arrow function
/*const sumThreeNumber = (number1,number2,number3) =>{
    return number1+number2+number3
}
const ans = sumThreeNumber(2,4,6)
console.log(ans)*/

//function Expression
/*const isEven = function(number){
    if(number%2==0){
        return true
    }return false
}*/

//arrow function
/*const isEven = (number) =>{
    if(number%2==0){
        return true
    }return false
}
console.log(isEven(3))*/
//arrow function a 1parameter a () perentheses na dele o kono problem nae but multiple parameter a dete hobe are 0 parameter a dete hobe
/*const isEven = (number) =>{
    if(number%2==0){
        return true
    }return false
}
console.log(isEven(3))*/
//2nd way
//1parameter thakle
const isEven= number => number%2==0;
console.log(isEven(3))