const num=[1,2,3,4,5,6,7,8,9,10]
//const neew=num.map((num)=>{return num+10})
//console.log(neew )

// chaining
const newNum=num
                .map((num)=> num*10)
                .map((num)=>num+1)
                .filter((num)=>num>=70)

console.log(newNum)

//reduce meethod!!!!!!!!!!
const num1=[1,2,3]
const total=num1.reduce(function (acc, cur){
    console.log(`acc: ${acc} and current: ${cur}`)
    return acc+cur

}, 0)
console.log(total)


// arrow function se likh rhe !!!!!!!!!!!

const tot = num1.reduce ( (acc, cur)=>acc+cur , 0)
console.log (tot)

const shoppingCart=[
    {
        itemName:"jscourse",
        price:933
    }, 
    {
          
        itemName:"python",
        price:677
    }, 
     {
          
        itemName:"dataanalytics",
        price:999
    }
]
console.log(shoppingCart.reduce((acc, item)=>acc + item.price, 0))

// useful for shopping apps to predict cart price n all

