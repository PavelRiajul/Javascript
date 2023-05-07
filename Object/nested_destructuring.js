//nested destructuring
const users = [
    {userId:1,firstNmae:"riajul",gender:"male"},
    {userId:2,firstNmae:"rasel",gender:"male"},
    {userId:3,firstNmae:"eamoly",gender:"female"}
]
//const[user1,user2,user3]=users
//console.log(user2)
const[{firstNmae: user2firstNmae}, ,{gender: user3gender}]=users
console.log(user2firstNmae)
console.log(user3gender)