//object destructuring
//normal way
const band ={
    bandname:"coke Studio",
    famousSong:"taki taki",
    yesr:22
};
/*const bandname = band.bandname
const famousSong = band.famousSong
console.log(bandname,famousSong)*/

//obj destructuring
let{bandname,famousSong,...rest}=band
bandname = "king"
console.log(bandname)
console.log(rest)
