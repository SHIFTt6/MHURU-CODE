/*Dynamic keys in JavaScript refer to property names that are determined or generated at runtime, 
rather than being hardcoded during development. Here's a breakdown of dynamic keys and how they work:

What are Dynamic Keys?
Definition: Dynamic keys are property names in JavaScript objects that are not fixed but can vary
depending on certain conditions or variables.

Runtime Creation: They are created or assigned at runtime, allowing for flexibility in object 
structure.

Computed Property Names: Dynamic keys are made possible through JavaScript's computed property 
names feature introduced in ES6.

Syntax and Usage
Dynamic keys are typically defined using square brackets [] around the variable or expression 
that determines the key name:

let keyName = "brand";
let car = {
    [keyName]: "Tesla"
};

In this example, keyName is a variable whose value ("brand") becomes the property name in the 
object.

Key Points
Flexibility: Dynamic keys allow for creating objects with varying structures based on runtime 
conditions.

Runtime Evaluation: JavaScript evaluates the expression inside the brackets to determine the actual
key name at runtime.

Compatibility: Dynamic keys work with all JavaScript objects, including arrays, functions, and 
plain objects.

Built-in Methods: Object methods like Object.keys(), Object.values(), etc., can be used with 
objects having dynamic keys.

Nested Objects: Dynamic keys can be used within nested objects as well.

Examples
Basic Usage:

let subject = "maths";
student.scores[subject] = 95;

Computed Property Names:
let car = {};
let modelKey = "model";
car[modelKey] = "Model S";

Step-by-Step Breakdown

let car = {};
This line declares a variable named car and initializes it as an empty object.
An empty object in JavaScript is represented by curly braces {}.

let modelKey = "model";
This line declares another variable called modelKey.
It assigns the string value "model" to this variable.

car[modelKey] = "Model S";
This line uses the variable modelKey as a key to set a property in the car object.
It assigns the string value "Model S" to the property whose key is the value stored in modelKey.

Key Points

Object Creation: The first line creates an empty object. This is equivalent to let car = new Object();
or simply let car = {}.

Variable Assignment: The second line creates a variable modelKey with the value "model".

Dynamic Property Assignment: The third line demonstrates dynamic property assignment using a 
variable as the key.

Result: After these lines execute, the car object will look like this:
{
  model: "Model S"
}

Alternative Notations
While the code above uses dynamic property assignment, it's worth noting that you could 
achieve the same result using dot notation:

let car = {};
let modelKey = "model";
car.model = "Model S";

Or even using shorthand object literals:

let car = { model: "Model S" };

*/