//const tinderUser=new Object()
const tinderUser={}
tinderUser.id="123abc"
tinderUser.name="Amiya"
tinderUser.isloggedIn= false

console.log (tinderUser)



const regularuser ={
    email: "hii@gmail.com", 
    fullname: {
        userfullname: {
            firstname: "Amiya",
            lastname: "Mishu"
        }
    }

}

console.log(regularuser.fullname.userfullname.firstname)

//agar koi variable nhi ho to '?' add kr do uske baad 
// as if usko skip kr dega aur aage badh jaega
// so api call krne wkt mostly kaam kiya jaata h 


const obj1= {1:"a",2:"b"}
const obj2={3:"a", 4:"b"}
const obj3={obj1, obj2}
const obj4 = Object.assign({}, obj1, obj2)
// assign wale se ye saara align ho jata h achhe se
// { } ----> ye daaalna is not important
//but agar daalte h to isme jata h iske beech me saara values
// agar nhi daalte h to object 1 mtlb jo pehle likha hoga usme jata h value

console.log(obj3, obj4)

//-------------------------------------------------------------------------------------

// ab for loop condition 
const users =[
    {
        id: 1, 
        email: " atfir@fur.com"

    },
    {
        id: 1, 
        email: " atfir@fur.com"

    },
    {
        id: 1, 
        email: " atfir@fur.com"

    },
    {
        id: 1, 
        email: " atfir@fur.com"

    },
]

users[1].email
console.log(tinderUser)
console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))


