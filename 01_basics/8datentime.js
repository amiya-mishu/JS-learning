let mydate=Date
let myDate=new Date()
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toISOString())
console.log(myDate.toJSON())
console.log(myDate.toLocaleDateString())
console.log(myDate.toLocaleString())
console.log(myDate.toLocaleTimeString())
console.log(myDate.toTimeString())
console.log(myDate.toUTCString())
console.log(typeof(myDate))

let createdDate=new Date(2025,6,2)// agar single digit me likhte h to month0-11 hoga
 //aur agar doble digit me to months 1-12 hoga like ("2025-03-14")--->march dega aur ("2023-3-14")feb dega
//date ko kaise bhi likh skte dd-mm-yyyy bhi likh skte

console.log(createdDate.toDateString());



//...........TIME.....

 let mytime=Date.now()
 console.log(mytime);
 console.log(createdDate.getTime())
 console.log(Math.floor(Date.now()/1000))
let newdate=new Date()
console.log(newdate.getMonth()+1)
console.log(newdate.getDay())


