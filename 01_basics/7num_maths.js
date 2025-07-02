const score=299
console.log(score)

const balance = new Number(100)
console.log (balance)
console.log(balance.toString().length)
/*

there are various functions used 
for Number type
and maths type
some are as follows:

toFixed(2)-->upto 2 precision values
NUM_MAX_VALUE
NUM_MIN_VALUE
NUM_MAX_SAFE_INTEGER
.....&many more
*/


const no=123.899933
console.log(no.toPrecision(3))

const hundreds=100000000
console.log(hundreds.toLocaleString('en-IN'))


//..................Math ....
console.log(Math);
console.log(Math.abs(-4))
console.log(Math.round(4.7))
console.log(Math.ceil(4.2))
console.log(Math.floor(4.9))
console.log(Math.min(4,6,7,9))
console.log(Math.random())//gives value from 0-1...
//to get 2 digit we do *10+1
//IMP NOTE
const min=10
const max=20
console.log(Math.floor(Math.random()*(max-min+1))+min)


