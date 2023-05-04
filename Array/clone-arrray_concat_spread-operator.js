//how to clone array
// how to concatenate two array

//arry1 clone 1st step
let arr1 = ['item1','item2']
//arr2 = ['item1','item2']
//array1 clone 2nd step
//let arr2=arr1.slice(0).concat(['item3','item4'])
//array1 clone 3rd step
//let arr2 = [].concat(arr1,['item3','item4'])
//new way
//spread operator
let newmorearry = ['item5','item6']
let arr2 = [...arr1,'item3','item4',...newmorearry]
arr1.push('item3')
console.log(arr1 === arr2)
console.log(arr1)
console.log(arr2)
