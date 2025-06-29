const account_id=7993
let account_email="hlo@123"
var account_password= "3280"
account_city="Delhi"
//account_id=4995---->not possible as it is a constant 
account_email="hii@123"
// dont take var because of the issue in block scope and functional scope  
let account_state
console.table([account_email,account_id, account_password, account_state, account_city])
