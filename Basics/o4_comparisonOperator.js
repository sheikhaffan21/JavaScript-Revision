// console.log(2>1)
// console.log(2>=1)
// console.log(2<11)
// console.log(2==1)
// console.log(2!=1)

//avoid comparing two different datatype

console.log("2">1);
console.log("02">1);

// > sign changes the null to 0
console.log(null>0)    //false
console.log(null == 0) //false
console.log(null >= 0) //true

console.log(undefined == 0) //false
console.log(undefined > 0)  //false
console.log(undefined<0)    //false

// strict check === (compare datatypes too)
console.log("2" == 2) //true
console.log("2"===2)  //false



