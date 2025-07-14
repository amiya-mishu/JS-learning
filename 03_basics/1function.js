// functions 
 function firstfunc (){
    console.log("A");
    console.log("M");
    console.log("I");
    console.log("Y")
    
    console.log("A")
   
 }
 firstfunc()

function add(number1, number2){
    console.log(number1+number2)

}
const result=add(3, 6)
console.log (result)

//undefines aaega value kyuki jo answer h vo nhi return krega so 
// aage dkho
// after the return statement no lines willl be executed so 
// dont do it
//write everything above return statement 

function add2(number1, number2){
    let result =number1+number2
    return result 
    //or directly return number1+number2
}
function loginuser(username){
    return `${username} just logged in `
}
loginuser("amiya")
console.log(loginuser("Amiya"))

// backtick wala chij pe dhyaan dena 

// when anything is not passed as parameters then 
// undefined aaega  ye wala case h below:-

function has (user){//-----yha pe (user="jiya") ye kr diya to iske baad agar koi value nhi diya gya to jiya lega & undefined pe nhi jaega 
    if (user==undefined )//----> equals to (!user)
        console.log("plz valid cheeze bhejo aise hi sirf function call mt kro ")

}
console.log(has())


function calculateprice(...num){//--> yha agar ( val1, val2, ... num1) hota to pehla 2 values usme val1 & val2 me jaata baki num1 me 
    return num;

}
console.log (calculateprice(200,3,300,900))
// array return krt h 

// function with objects

const user={
    id: 12023052004031, 
    price: 499
}
function handleobj(anyobj){
    console.log(`any name is ${anyobj.id} and price is ${anyobj.price}`)

}
handleobj(user)
//agar prices hota to undefined aaega so name same hona chahiye for better o/p


