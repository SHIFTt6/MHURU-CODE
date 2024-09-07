/*When we create a fn, Js will automatically create an empty object that is a fn prototype or a prototype 
 object for a fn
 To access the function prototype, we use fn<name>.__proto__ and it access an object which is particularily empty
 fn<name>.__proto__.__proto__ will access the prototype object of a the fn prototype that is the null property {object}
 fn<name>.__proto__.__proto__.__proto__ will the access the Null 
*/

let gross = function(){

}
console.log("\n",gross.__proto__) // access an empty object (fn prototype/ prototype object for a fn)
console.log(gross.__proto__.__proto__) // access the prototype object for the fn prototype
console.log(gross.__proto__.__proto__.__proto__) // access the NULL

/**
 * FUNCTION PROTOTYPE CHAIN
 *                                                [NULL]
 *                              
 *FN<name>.__proto__.__proto__                   [NULL PROTOTYPE {OBJECT}]
 * 
 *           (FN<name>.__proto__)               [OBJECT]
 * 
 *                                            [FUNCTION]           
 */
