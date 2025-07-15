// scope is the reason we didn't study `var` type of declaration 
//yha pe bhi declare krege to bhi lastly jo var me rhega vhi print hoga 
var c=300
let a =450
//if k andar jo bhi h vo h block/local scope 
// aur uske bahar jo bhi h vo h global scope 
//block ka value bahar nhi jaega 
//global ka andar aaega 
if (true){
    let a= 10
    const b=20
    var c=30
    d=900

}
console.log(a)//---> error dega 
//console.log(b)--->error dega 

console.log(c)// ye print kr dega 

//curly braces are the scope 
//nested scope
function one(){
    const username = " Amiya"
    function two(){
        const website = "youtube"
        console.log(username)

    }
    two()
    //console.log(website)---> will give error
    
}
one()


if(true)
{
    const username = "Amiya"
    if(username=="Amiya"){
        const website= "youtube "
        console.log(username+website)

    }
    //console.log(website)---> error

}
//console.log(username)---> error


//-------interesting concept
function add1(num)
{
    return num +1
}
console.log(add1(7))
//console.log(add2(4))---> yha pe error deag j]hoisting ho gya
const add2= function (num){
    return num+2
}
console.log(add2(4))





