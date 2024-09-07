/**If the global protoype is changed, it will affect all the objects in Js
 * To prove or find the Truth if the null prototype is the same for both fn and obj, we use an if Statement
  or prove by adding properties to check if it exist for all when we try to access both the function and the object
*/

let a = {}          // empty obj a

let b = function(){

}

console.log(a.__proto__)                //   trying to access null prototype using an objcet
console.log(b.__proto__.__proto__)      // trying to access null prototype using a function

    console.log("\nCHECKING TRUTH")

    if (a.__proto__===b.__proto__.__proto__) {
        console.log("Same")
    } else{
        console.log("Aint Similar")         // now the statements shows us that they are the same
    }

            console.log("\nPROVING BY ADDING PROPERTIES")

            // b.__proto__.__proto__.prop1 = "Tengai" // we can add values thru a fn or an obj
            a.__proto__.prop1 = "Misfit"

            console.log(a.prop1)
            console.log(b.prop1)      // Both they show us that prop1 value is present for all

            //  console.log(a.__proto__.prop1)

/** HOW ARE WE GOING TO ACCESS THE PROPERTY  prop1 DIRECTLY USING AN OBJECT? i.e console.log(a.prop1)
 * yet we are supposed to access it by doing  // console.log(a.__proto__.prop1)
 * coz wheever we try to access a property from one of the objects or function, Js tries to search that 
 * property in the scope of that object or function 1st and if found it returns the value 
 
 * If it is not present, Js will move to its prototype of that fn or obj and if not present, it will 
 * go to the prototype of its protoype
 
 *  Js will do backtracking as it searches for the property in its prototype chain
 */