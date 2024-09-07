/**A property which takes a function as its value is called a getter property
 * The call property is used when we want to exe a fn which is part of another object and when we calling
 * a fn providing the ref of another object
 * 
 * <objname>.<fnname>.call(refered_obj,<param_value>) and if the function doesnt have parameters, juss leave the param
 */

const account = {
    name:"Gleesh",
    accnumber: 225625,
    amount: 100,
    addamnt: function(){
        return this.amount += 100
    } // function which adds 100$ to the existing amount
}

const accmanager = {
    name:"Tembukai",
    managing: account.name,
    doop:account.addamnt /**
    Js creates a new property with some value NaN because when a fn is called, this Kword will be pointing
  * to obj1 and obj2 doesnt have amnt property so since it ain't found, Js will try to create for us
  * that is instead of adding to obj1, it is adding to itself 
  */
}


// account.addamnt() // whenever we call this function, the amount is updated to 200
// if we do not call this function, amount won't be updated to 200, it remains 100
// console.log(account)

/** accmanager.doop() when doop is called, fn acc.addamnt is exe and this ref in acc obj
is pointing to obj accmanager and the accmanager doesn't have the amount property, so 
Js will creates a new prop amount with value NaN and is adding value to undefined whisch
is Not a Number and instead of adding amount to Gleesh acc, it is adding to accmanager
so we use call property to solve this
*/

accmanager.doop.call(account)

/**If the function has arguments i.e function(param){
 *                              return this.amount += param}
 
 * then when calling the function, we need to uodate the parameter i.e
 
  accmanager.doop.call(account,500) | <objname>.<fnname>.call(refered_obj,<param_value>)
 */

console.log(account) // amount isnt updating
console.log(accmanager)
