//callback function

/*function myFunc(){
    console.log("hello world")
}
myFunc()*/

//function a array pass korbo
/*function myFunc(a){
    console.log(a)
    console.log("hello world")  
}
myFunc([2,3,4,5,66,])*/

//function a string pass korbo
/*function myFunc(a){
    console.log(a)
    console.log("hello world")  
}
myFunc("kfkef")*/

/*function myFunc2(name){
    console.log("inside my Func2")
    console.log(`your name is${name}`)
}

function myFunc(callback){
    console.log("hello there")
    callback("riajulislam")
     
}

myFunc(myFunc2)*/
//first a function call korbe myfunc 2nd callback ke callkorbe funce2 tarpor  function peremater a jabe

function func2(name){
    console.log("inside My app")
    console.log(`your name is${name}`)
}
function func(callback){
    console.log("hello tehre")
callback("riajul islam")
}
func(func2)