// ths and arrow 
const user ={
    username: "Amiya",
    price :999,
    welcomeMessage: function(){
        console.log(`${this.username} welcome to website `)

//current context k liye  this use kiye idhar

    }
}
user.welcomeMessage()
user. username="koaa"
user.welcomeMessage()
//global object used in browser very often is window object ----interview question


const chai=()=> {
    let username ="jeffy"
    console.log(this)

}
chai()
//this and arrow wala part dekhna h ----------------------------------------------------


const fff=(num1, num2)=> {
    return num1+num2

}
console.log(fff(8, 9))

//ab agar ek line ka h to curly braces hata smte h 
// also agar () is bracket k andar likhenge to return statement nhi likhna hoga 
//  arrow function me 
//{} ye lga to likhna prega return which is called explicit return 
// ( ) ye hua to return nhi likhna h so called implicit return 






