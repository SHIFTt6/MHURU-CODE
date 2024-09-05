/**
 * When we call a constructor without the new keyword, the fn is going to be executed but the 
 * object isnt created
 * (new.target) is used when we want to print both the function and the constructor buh with the help 
 * of an if statement
 */
function  Person(name, age, city) {
    if (!new.target) {  // !new.target simply means if the function is not invoked with the new keyword
       return `${name} is ${age} now`
    }                   // now is if the function is invoked with the new keyword, create an object
    this.name = name;
    this.age = age;
    this.city = city;
}

const  Person1 = Person("Shift",63);
const  Person2 = new Person("Smoke",23);

console.log(Person1)
console.log( Person2)// outputs an object with 2 properties