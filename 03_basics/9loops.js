//other name for loops is iterators

//for
for (let index = 0; index < 10; index++) {
    const element = index;
    console.log(element)    
}
//console.log(element)    ---> ye error dega because of scope 
//nested for loops
let myarray=["hii", "jii", "jijf"]
for (let index = 0; index < myarray.length; index++) {
    const element = myarray[index];
    console.log(element)
    
}
//break and continue bhi hota h 
  


//---------while-------
let i=0
while (i<5) {
    console.log(i)
    i= i+1
}


//let lete h ye sb me kyuki const se change nhi krega value

do {
    console.log(i)
    i++
} while (i<9);


//higher order array loops 


//array of objects--->[{} ,{}, {}]


const arr=[1, 2,3,4,5]
 for (const num of arr) {
    console.log(num)
 }
 const greeting="Hello world"
 for (const greet  of greeting) {
    console.log(`each char is ${greet}`)
    
 }



 const map = new Map()

map.set('IN', "india")
map.set ('usa', "unitedstates of america")

map.set('IN', "india")// ek hi baar print krega kyuki unique value ko store krta h ye 



console.log(map)
for (const [key, value] of map) {
    console.log (key ,"-->",  value)
}




const myObject={
    'game1':'NFS', 
    'game2' : 'Spiderman'
}
//for (const [key, value] of myObject) {
//    console.log(key, value)
//}
// ye aise kaam nhi krega



const language={
    js:'javascript', 
    cpp:'cPP', 
    rb:'ruby', 
    sw:'swift'

}
//for in loop
for (const key in language) {
   
    console.log(key)

}

for (const key in language) {
   
    console.log(language[key])
    // also can be written as backticks 
    console.log(`${key} shortcut for ${language[key]}`)
}





const program =["hii", "hiii", "hiiii", "hiiiii"]
for (const key in program) {
   
    console.log(key)
}



// for-in loop cant iterate(means doesn't work on map ) map functions 



//------forEach loop () ---mostly used

const coding =["js", "java", "ruby", "cpp"]
coding.forEach(function (item){
    // ye baari baari se hr item of the array ko ek ek krke leke aaega apne pe for iteration
    console.log (item)
})

// arrow operator bhi use kr skte h

coding.forEach((item) =>  {
    console.log(item)
    
});



// considering a function by own and then analyzing it 
function printMe ( item){
    console.log(item)

}
coding.forEach(printMe)


// basicaaly a lot more can be contained in for each loop 
// item, index , and also the arr 
// therfore each element has the access to the whole array

coding.forEach( (item, index, arr)=>{
    console.log(item, index, arr)
}
)

// ab object k saath kr rhe 
const myCoding =[
    {
        languageName: "JAVA", 
        languageFileName: "java"

    }, 
    {
        languageName: "c++", 
        languageFileName: "cpp"
    }, 
    {
        languageName: "python", 
        languageFileName: "py"

    }
]
myCoding.forEach((item)=>{

    console.log(item.languageName)
}
)










