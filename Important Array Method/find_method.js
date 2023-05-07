//find method

//const myArray = ["Hello","cat","dog","lion"];
/*function isLength3(string){
    return string.length ===3
}*/
/*const ans =myArray.find((String)=>{
return String.length===4
})
console.log(ans)*/

//real life example
const users = [
    {userId:1, userName:"riajul"},
    {userId:2, userName:"eamoly"},
    {userId:3, userName:"abdullah"},
    {userId:4, userName:"mozahid"},
];
const myuser = users.find((user)=>user.userId===3);
console.log(myuser)