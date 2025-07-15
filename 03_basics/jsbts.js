/*
Javascript Execution context
two types:-
i) global execution/environment context (eg: this)
ii)function execution context
iii)Eval execution context ( not imporrtant actually its the special case of global execution  context)

{}-> memory creation phase / creation phase (can call anything)( creates memory )
*/
let val1=10
let val2=5
function addnum(num1, num2){
    let total= num1+num2
    return total
}
let result1=addnum (val1, val2)
let result2= addnum(10, 3)


/* step1-global execution --->this

step2- memory phase
val1=undef 
val2 =undef
addnum->defined
result1 = undef
result2= undef
step3-execution phase
val1<---10
val2<---55
addnum-->each time a function is called 
        a new variable environment + execution thread is formed 
        and also gets deleted after work is done 

now this goes to memory phase 
where;
val1=undef
val2=undef
total=undef

execution context 
num1=10
num2=5
total=15
 this total goes to global execution phase .....
 this repeats for each time and work performed 


 -----------CALL STACK----------------

LIFO PRINCIPLE  when more than one function is called in short 
pehle function call krke jaata h global execution phase me then 
after execution vo vha se nikl jata h but 
agar ek se jada function call hua to 
LIFO principle se execute krta h 
google chrome activity:-
activity ye h ki pehle breakpoints lga lga kr execute kro 
source pe jake to kaise kaise call kr rha h ye pta chl jaega  


        */