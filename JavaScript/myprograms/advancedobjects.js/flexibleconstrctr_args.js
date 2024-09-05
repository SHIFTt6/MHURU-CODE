/**
 * Constructor args are also flexible juss like function args that is, it is not neccessary to provide 
 * all the args, they're flexible 
 */

function  Person(name, age, city) {
    this.name = name;
    this.age = age;
    this.city = city;
}

const  Person1 = new Person();

console.log( Person1);// an object will be created with undefined property values

console.log("\nADDING ARGS TO THE CONSTRUCTOR");

const  Person2 = new Person("John", "New York");
console.log(Person2);

console.log("\nOR UPDATING THE PROPERTIES")

// console.log(Person2.age = 24); or
Person1.age = 24
console.log(Person1);



