/**
 * A constructor uses (this) keyword
 * the constructor name must start with an uppercase to tell the user that its a constructor and for
 * a function must be small caps juss to differentiate
 * Difference between a function and a construcor is that when calling a fn, we only use the function name
 * buh calling a constructor, there is need of using (new) keyword
 * In a normal fn we declare an object at the beginning, add some details and return the object
 * buh in a constructor there is no need of declaring the object, Js will do that for us, we add some
 * properties to the object using (this) keyword and Js will return the object for us 
 */

function Student (name, age, province, company){
    this["name"] = name
    this["age"] = age
    this.province = province
    this.company = company
}

const s1 = new Student("Tawana", 24, "Zimbabwe", "Delta")
const s2 = new Student("Nyasha", 18, "Lesotho", "Maheu")

console.log(s1)
console.log(s2)

/*
 One can also output a constructor without doing this: 

 const  s1 = new Student("Tawana", 24, "Zimbabwe", "Delta")

 buh juss  this:

 console.log(new  Student("Tawana", 24, "Zimbabwe", "Delta"))

 as one will be declaring and  instantiating the object at the same time together with printing

*/