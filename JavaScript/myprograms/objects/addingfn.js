console.log("CREATE A PROPERTY AND ASSIGN A FUNCTION\n")

let obj2 = {   
    firstName:"Gobla",
    lastName:"Mabla",
    age:23,

    
    // to concatenate using $, we use back quotes `` key found above the tab key
    displayDetails : function details(){
        console.log(`The boy ${obj2.firstName} ${obj2.lastName} is ${obj2.age} years old`)
    },

    // otherthan using the function keyword, juss use the fn name with fn details
    details(){
        console.log(`A ${obj2.age} years old boy is ${obj2.firstName} ${obj2.lastName}`)   
    }
}

obj2.displayDetails()
obj2.details()

// CONCEPT OF this KEYWORD
console.log("\nCONCEPT OF this KEYWORD\n")
let obj3 = {   
    firstName:"Gobla",
    lastName:"Mabla",
    age:23,

    
    // to concatenate using $, we use back quotes `` key found above the tab key
    displayDetails : function details(){
        console.log(`The boy ${this.firstName} ${this.lastName} is ${this.age} years old`)
    },
}

// this keyword is used to refer to the current object
obj4 = obj3

console.log(obj3)
console.log(obj4)