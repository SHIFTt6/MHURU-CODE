/** let object1 = {
         key1: value1,
        key2: value2,
        key3: value3
}
  key is the property name
 */

console.log("CREATING AN EMPTY OBJECT")
// and adding propeties after creating an object a dot is used to add properties e.g obj.fistName

let obj = {}

    obj.firstName = "Gobla"
    obj.lastName = "Mabla"
    obj.age = 23

    console.log("object creation",obj)

console.log("\nCREATING AN OBJECT  WITH PROPERTIES")
// when creating an object with properties, a colon is used to add values e.g obj:age

let obj2 = {   
            firstName:"Gobla",
            lastName:"Mabla",
            age:23
            }

    console.log("The boy is",obj2.firstName)

//CONCLUSION: both method outputs the same thing

console.log("\nFETCHING VALUE OF A PROPERTY")
// difference between the dot notation and the sqaure barckets
// dot notation is used when the property name is a single word

let obj3 = {   
            firstName:"Gobla",
            lastName:"Mabla",
            age:23
            }
    let abc = "age"

    console.log(obj3.abc)   // output will be undefined coz a dot notation isnt used when we dont know the property
    console.log(obj3[abc])
// we say dot or put in square brackets is the property of an object
