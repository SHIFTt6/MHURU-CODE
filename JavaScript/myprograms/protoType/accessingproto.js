/*A prototype is a mechanism by which objects inherit behaviour from each other
 By default in Js, objects iherit from the Null prototype{object} and the Null prototype has a proto property
 which points to NULL.
 Null prototype{object} is global that is it is available for all objects
 we can create an empty object and if we want to access it, we use the object with a special property
 obj<name>.__proto__ obj dot underscore underscore proto underscore underscore
 */

 let obj = {}

//  obj.__proto__

 console.log(obj.__proto__) // outputs [Object: null prototype] {} and the object is empty

 console.log("\nWE CAN ALSO ADD SOME PROPERTIES")

 obj.__proto__.Test = "Test"
 console.log(obj.__proto__)

/**OBJECT PROTOTYPE CHAIN
 *
 *  (Obj<name>.__proto__.__proto__)        [NULL]
 *                              
 *  Obj<name>.__proto__                   [NULL PROTOTYPE {OBJECT}]
 * 
 *                                       [OBJECT]
 * 
 */