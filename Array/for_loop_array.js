//forloop in array
let fruites = ['apple','banana','mango','grapes']

//1 to 9 print
/*for(let i= 0; i<=9;i++){
    console.log(i)
}*/
//array most important langth
//console.log(fruites.length)
//array 1st element
//console.log(fruites[0])
//array last element
//console.log(fruites[fruites.length-1])
//for loop use array length check
//creat apply fruites2
let fruites2 = []
for(let i =0;i<fruites.length;i++){
    fruites2.push(fruites[i].toUpperCase());
}
console.log(fruites)