/**A property which takes a function as its value is called a getter property
 * The call property is used when we want to exe a fn which is part of another object and when we calling
 * a fn providing the ref of another object
 * 
 * <objname>.call(refered_obj,<param_value>) and if the function doesnt have parameters, juss leave the param
 * Js creates a new property with some value NaN because when a fn is called, this Kword will be pointing
 * to obj1 and obj2 doesnt have amnt property so since it ain't found, Js will try to create for us
 * that is instead of adding to obj1, it is adding to itself 
 */