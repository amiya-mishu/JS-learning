let score = 33
console.log(typeof score)
console.log(typeof(score))

// now to convert any string into no. we do the following :-
//Number ka 'n' capital me hoga for conversion 

let newscore="54"
let value_in_number=Number(newscore)
console.log(typeof newscore)

//newscore agar 33edf hota  ya phir undefined hota to bhi number me convert hota but value print krne pe bolta NaN 
//also agar variable ko null assign krege to bhi data type number hoga aur uske baad value  0 print krega

//"33"=> 33
//33abc=>NaN
//true=>1, false=>0


//number--->boolean
let isLoggedIn=1
let bool=Boolean(isLoggedIn)
console.log(bool)

//number-->string
let no=44
let str=String (no)
console.log(str)
console.log(typeof str)


//........operations.............
let value=4
let neg=-value
console.log(neg)


console.log(2+2)
console.log(2-2)
console.log(2*2)
console.log(2**3)
console.log(2/3)
console.log(2%3)


let str1="hii"
let str2=" its me"
console.log(str1+str2)

console.log(1+"2")     //12
console.log("1"+2)     //12
console.log("1"+2+2)   //122
console.log(1+2+"2")   //32
//mdn preference order hota h 

//console.log(+true)--->1
//console.log(true+)--->error
//console.log(+"")--->0

let gamecounter=100
console.log(++gamecounter)

