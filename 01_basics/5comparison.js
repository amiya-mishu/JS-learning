//console.log(2>1)
//console.log(2<1)
//console.log(2==1)
//console.log(2>=1)
//console.log(2<=1)
//console.log(2!=1)

//problematic scenario
console.log(null>0) //--->false
console.log(null==0)  //--->false
console.log(null>=0)   //--->true
//The reason is that an equality check== and comparisons >,<,>=,<=work differently
//Comparisons convert null to a number, treating it as 0. That's why (3)null>=0 is true and the rest are false

console.log(undefined==0)
console.log(undefined>0)
console.log(undefined<0)
 //NOTE:- avoid these 6 comparisons

 // ===--->thsi compares the data type and also the value 
 //!==-->this also
console.log("2"===2)


// --------------------------Summary of datatypes n all till now ------------------------------------------------------------------------------

/* Primitive

7 types: String, number, boolean, null, undefined, symbol=to make any value unique, BigInt
symbol=unique like id jo unique hota h likw customer id n all



Reference/non primitive type 
array, objects, functions

JavaScript is dynamically typed
 you don’t have to declare variable types explicitly
 and types are determined at runtime
 for eg.
let x = 5;      // x is a number
x = "hello";    // now x is a string
*/

// symbol
const id=Symbol('123')
const id2=Symbol('123')
console.log(id==id2);//---false



