/*can be denoted by either single or double quotes 
*/
const name = "ams"
const repo=50
console.log( name + repo)
/*to concatinate the string we use-->``
we write the normal string in 
it and then when we need to insert any 
variable we write $ sign and add 
variable name in {}!!!!!*/

console.log(`hii its ${name} and given ${repo} count as repo`)

const game=new String('hiiitsme')
console.log (game[0]);
console.log(game.__proto__);
console.log(game.toUpperCase());
console.log(game.length)
/* some important string functions 
charAt(index no.)
indexOf('character')
substring(start index no. , end index no.)...doesnt include end wala character 

const game = "JavaScript";
console.log(game.slice(-8, 3));
The string has 10 characters.

-8 = 2 → starts at character at index 2.

3 = ends before index 3.

➡ So it returns characters from index 2 to 3: "v".

trim()--> remov spaces from start and endand specifically from start or end if in form of trimStart or trimEnd 
replace('replace', 'replaced')
split('seperator')



either in mdndocs or google console '
*/
console.log(game.slice(-6,3));//it starts from end 


