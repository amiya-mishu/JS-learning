const userEmail=[]
if(userEmail){
    console.log("got user email")

}else{
    console.log("don't have user email")

}

/* falsy values
false, 0 , -0, BigInt 0n, "", null, undefined, NaN
truthy values
"0", 'false', " ", [], {}, funciton(){}
*/
if (userEmail.length===0)
{
    console.log("array is empty")

}
const emptyObj={}
if(Object.keys(emptyObj).length===0){
    console.log("object is empty")
}


//Nullish Coalescing Operator (??):null undefined

let val1
//val1=5??10
val1=null??10

val1=undefined??8
console.log(val1)


//null coalescing and ternary operators are different not same

//ternary ope.
const iceTeaPrice=100
iceTeaPrice<=80?console.log("less than 80 "):console.log("more than 80")



