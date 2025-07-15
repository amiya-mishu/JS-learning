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



