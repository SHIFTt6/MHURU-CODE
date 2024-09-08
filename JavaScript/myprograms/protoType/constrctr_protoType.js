/**When a constructor is made, Js will create an obj
 * a prototype object for a constructor function is different from prototype object for a function
 */

function Person(name) {
    this.name = name;

}

let con1 =  new Person("Munashe");
let con2 = new Person("Gnashe")

if (Person.prototype === Person.__proto__){
    console.log("true");
}else{
    console.log("false");
}
// constructor and function have different prototype

console.log("\nCHECKING IF THE CONSTRUCTOR PROTOTYPE IS DIFF FROM THAT OF ANY OTHER OBJECTS")

if (Person.prototype === con1.__proto__){
    console.log("true");
}else{
    console.log("false");
}
// hence they are the same 

/**
 * CONSTRUCTOR PROTOTYPE CHAIN
 * 
 *                                       NULL
 *                                        I
 *                                  NULL PROTOTYPE {OBJECT}      FN<name>.__proto__.__proto__
 *                                        I
 *                                      OBJECT                   CON<name>.__proto__ | Obj<name>.__proto__
 *                                        I
 *                                    CONSTRUCTOR           
 *                                        I
 *                 OBJECTS CREATED FROM A CONSTRUCTOR

 * 
 * Objects created from  a constructor function have a prototype object that is linked to the constructor function's prototype object
 */
