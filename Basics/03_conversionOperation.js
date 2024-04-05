let score = false

console.log(typeof score)
console.log(typeof(score))
let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber)

//Number() =>

// "33" => 33
// "33abc" => NaN  //NaN is of number Type
// null => 0
//undefined => NaN
// true => 1; false => 0


let isLoggedIn = "affan";
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn)

//Boolean() =>

//1 => true
//0 => false
//"" => false
//"Affan" => true

let someNumber = 33
let StringNumber = String(someNumber)
console.log(typeof(StringNumber))
console.log(StringNumber)