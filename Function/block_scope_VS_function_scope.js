//block scope vs function scope

//let and const are block scope
//var is function scope
//let or const sobsomy block er betore thakbe and var block er baereo thakbe abar betoreo thakbe 

//block 1 let (block scope  2nd braket er betore hobe)
/*{
    let firstNamee = "riajul"
    console.log(firstNamee)
}*/
//block2 const
/*{
    const lasttNamee = "pavel"
    console.log(lasttNamee)
}*/

//function scope
/*{
    var firstNmae = "rasel";   
}
    console.log(firstNmae)*/

    //
/*{
    var firstNamee = "rasel"
    console.log(firstNamee)
}    
{
    //var firstNamee = ("jakir")
    console.log(firstNamee)
}*/
//if block  var block er baere ba betore jete pare
/*if(true){
    var firstNmae = "riajul"
    console.log(firstNmae);
}
console.log(firstNmae)*/

//let or const sobsomy block er betore thakbe baere ashle error ashbe
/*if(true){
    let firstNmae = "riajul"
    console.log(firstNmae);
}
console.log(firstNmae)*/

//var is function scope
function myApp(){
      if(true){
        var firstName = "riajul"
        console.log(firstName)
      }
      if(true){
        console.log(firstName)
      }
      console.log(firstName)
}
myApp()


