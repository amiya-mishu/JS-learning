/* objects are of two types 
singleton and object literals 
to create singleton object we do it like 
object.create 
whereas we will take into consideration the object literals
we creaate it like 
const JsUser ={}*/
const mysim=Symbol("mykey1");
const JsUser={
    //either write name or you can also 
    //go on writing 0,1....2
    name:"Amiya",
    age: 20,
    "loc": "Patna",
    [mysim]: "mykey1",
    email: "hii@gmail.com",
    islogin: false,
    lastlogin:["monday", "Sat"]

}
console.log(JsUser.email)

console.log(JsUser["email"])
 //loc wale ka dekho usme string me dec h
 //so only acceesseed by square bracket 
console.log(JsUser["loc"])
console.log(JsUser[mysim])
JsUser.email="jii@gmail.com"
// freeze kr dene se change nhi hoga 
//Object.freeze(JsUser)
JsUser.email="jii@microsoft.com"
console.log(JsUser.email)
//check o/p change nhi hoga


// to create a new attribute in an object
JsUser.greeting=function(){
    console.log("hello js user")

}
console.log(JsUser.greeting())

 //name ko reference krna h 
 JsUser.greeting2=function(){
    console.log(`hello js user,${this.name}`)

}
console.log(JsUser.greeting())
console.log(JsUser.greeting2())



//objects part 2 

