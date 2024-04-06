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

//string() =>
//anything in string format

/* OPERATIONS */

//negative value
let value =3;
let negValue = -value;
console.log(negValue);

//basic operator
console.log(2+2)
console.log(2-2)
console.log(2*2)
console.log(2**2)
console.log(2/2)
console.log(2%2)

//concatenation
let str1="hello"
let str2=" affan"
let str3 = str1+str2
console.log(str1+str2)
console.log(str3)

console.log("1"+2)
console.log(1+"2")
console.log("1"+2+2) //122 beacuse if string come first then in concatenation it will consider as string
console.log(1+2+"2") //32 because numbers comes first

console.log(3+4*5%3) //not good practice

console.log(true) //prints true
console.log(+true) //prints 1 => conversion to number due to increment opertor

console.log(+"") //prints 0 

let num1, num2, num3
num1 = num2 = mum3 = 2+2 //not good practice


/*Increment Decrement Operator*/
let gameCounter =100
++gameCounter //prefix increment
gameCounter++ //postfix increment




