
let obj1 = {   
    firstName:"Gobla",
    lastName:"Mabla",
    age:23
    }

    // adding a property
    console.log("\n Adding a property skill");


    obj1.skill = 5
    obj1["level"] = 1 // or use sq brackets
     console.log("\n",obj1)

    // Updating  a property
    console.log("\n Updating  a property")
    obj1.skill = 10
    console.log("\n",obj1)

     // deleting a property
     // we have to use a special keyword delete
     console.log("\n Deleting a property")
     delete obj1.skill
     obj1.skill = null // and is different from delete juss that the value is null

     console.log(obj1)
