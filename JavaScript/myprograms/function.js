// to create a fn use the keyword function
// function with arguments 

function add_numbers(num1, num2){
    console.log(num1+num2)
}

function sub_(num3, num4){
    let x = num3 - num4
    console.log(x)
}

//fn without arguements 

function abc(){
    console.log("I am great")
}
// call a function juss use the name of the function

add_numbers("add:"+2,5)
abc()
sub_(6787,888)

// using return keyword
function snap(num5, num6){
    return num5 + num6
}

let y = snap(45, 89)
console.log(y)

console.log("setting default values for fns")
// is done within the defining of an arguement

function abuda(dol1=100, dol2 = 50){
    console.log(dol1)
    console.log(dol2)
// here 50 is the default value for dol2 i.e if value of dol2 isnt specified,
//automatically it will use 50
}

abuda(10)
console.log("SKIP")
// if we want to skip the dol1 value, juss use the undefined keyword
abuda(undefined,40)

// assigning a function to a variable and the function can be called using
// variable name buh is risky unless the variable is not to be overwritten

console.log("Anonymus Fns In Js")

let a = function gross(arg){
    console.log(arg)
}
a("HELLO WORLD")
// now the function name is optional to write or leave