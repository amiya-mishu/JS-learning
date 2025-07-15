// immediately invoked function expressions (IIFE)

(function chai(){
    //named iife
    console.log(`DB connected`)
}
)();// ; ye important h dena 

// jo statement immediately execute ho jae 
// global scope k kaaran pollution hoti h so 
// usko mtlb pollution ko hatane k liye use krte h ye sb apn log 

// syntax:-
((name)=> {
    //unnamed iife , we have passed a parameter

    console.log(`DB connected 2 ${name}`)

})("amiya");
// this is how we write two iife


