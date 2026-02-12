const accountId = 14245234
let accountEmail = "tanupriya@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 2 // Not allowed

accountEmail = "hc@google.com"
accountPassword = "2121212121212"
accountCity = "Contai"

console.log(accountId);

/*
    Prefer not to use var
    because of issue in block scope and funtional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

