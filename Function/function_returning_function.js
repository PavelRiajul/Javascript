//function returning function
//function er betore function

/*function  fanc(){
    return 1// return array,object s,tring kora jai
}
const ans = fanc();
console.log(ans)*/

/*function  fanc(){
    function hello(){
        console.log("hello world")
    }
    return hello;
}
const ans = fanc();
ans()*/

//2nd way
/*function  fanc(){
    function hello(){
        return "hello world"
    }
    return hello;
}
const ans = fanc();
console.log(ans())*/

//3rd way
function  fanc(){
    return function(){
        return "hello world";
    }
}
const ans = fanc();
console.log(ans())