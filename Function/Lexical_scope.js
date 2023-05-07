//laxical scope

const myVar = "value1"

/*function myApp(){
    //const myVar = "value1"
    function myFunc(){
        //const myVar = "value58"
        console.log("inside myFunc",myVar)
    }

    console.log(myVar)
    myFunc()
}
myApp()*/

function myApp(){
    function myFunc(){
        const myFunc2 = ()=>{
            console.log("inside myFunc",myVar)
        }
        myFunc2()
    }
    console.log(myVar)
    myFunc()
}
myApp()