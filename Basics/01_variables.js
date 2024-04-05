const account = 14453;
let accountEmail = "hitesh@gmail.com"; //scope problem isn't there in let
var accountPassword = "12345"; //var isn't used due to scope problem
accountCity = "Jaipur"

accountID =2 //will throw error

console.log(accountID);

console.table([accountID, accountEmail, accountPassword, accountCity])

/*
Prefer not to use in var
because of issue in block and functional scope
*/