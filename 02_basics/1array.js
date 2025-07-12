const arrayy=[1,4,3,34,54,"hii"]//declared as mix, string or number also 
const hee=new Array (1,2,3,4)
console.log(hee)
// google console me prototype access bhi hota h 
console.log (arrayy.length)
console.log(arrayy.indexOf(1))
arrayy.push(54)
arrayy.pop(1)
arrayy.unshift(76)//sbse pehle add kr deta h array ka 
console.log(arrayy.includes(3))
/* function of arrays 
indexOf ()*/
const neww =arrayy.join()
console.log(neww)
console.log(typeof(neww))//string dega ..... sirf type badal deta h 


//slice and splice

const newarray=[1,2,3,4,5,6,7]
const new2=newarray.slice(1,3)
console.log(new2)

const new3=newarray.splice(1,3)
console.log(new3)
console.log(newarray)




//Array part 2

const arr1=["hello", "wahts up", "jkie", "heiie"]
const arr2=["osgj", "jeiogehs", "vndskj", "nvjs"]
arr1.push(arr2)// ye push kr dega lekin access lene ka tareeka shi nhi hoga 
console.log(arr1[4][3]);
const arr3=["hello", "wahts up", "jkie", "heiie"]
const arr4=["osgj", "jeiogehs", "vndskj", "nvjs"]
//shi tareeka 
const arr5=arr3.concat(arr4)

console.log (arr5)

//spread method (more preferred) 
const arr6=[...arr2,...arr4]

const arr7=[1,3,4,[3,4,6,6],[854,34,654,67,[75,4,3,7]]]
console.log(arr7.flat(Infinity))
//infinity k jagah exact depth bhi de skte h but agar inf. dete h to koi dikkat nhi 


console.log(Array.isArray("Amiya"))
console.log(Array.from("Amiya"))
console.log(Array.from({name:"Amiya"}))//important for interviews


const s1=100
const s2= 200
const s3= 300
console.log(Array.of(s1,s2,s3))

//important functions h of, from, isArray



