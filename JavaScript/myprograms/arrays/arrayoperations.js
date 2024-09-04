/*PUSH() adds one or more elements at the end of an array
  POP() removes the last elements from an array
  SHIFT() removes the first element from an array
  UNSHIFT() adds one or more elements at the beginning of an array
*/

let arr1 =  [1, 2, 3, 4, 5];
let arr2 = ["Sun","Mon","Tue"];

console.log("\nPUSHING ELEMENTS"); 
arr1.push(60);
arr2.push("Wed","Thur","Fri")
console.log(arr1);
console.log(arr2);

console.log("\nPOPING ELEMENTS"); 
arr1.pop();         // elem 60 is remeoved
console.log(arr1)

console.log("\nSHIFTING ELEMENTS");
arr2.shift();         // elem "Sun" is removed
console.log(arr2);

console.log("\nUNSHIFTING ELEMENTS");
arr2.unshift("Sat","Sun");
console.log(arr2);


