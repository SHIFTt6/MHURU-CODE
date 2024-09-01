
// we can add an obj inside another obj i.e adress inside obj1
const obj1 = {   
    firstName:"Gobla",
    lastName:"Mabla",
    age:23,
    address:{
        city:  "Mumbai",
        country:  "India",
        homeadress:   "123, ABC street"
    }
    }
    console.log(obj1)
    console.log(obj1.address) // to access adress object, use "DOT" notation obj1.address
    console.log(obj1.address.city) // to access a property of an object of an object(obj.obj.property)

    console.log("\n ADDING A PROPERTY state TO OBJECT ADDRESS")

    obj1.address.state = "Maharashtra"   // adding a new property to the address object
    console.log(obj1.address)            // to access adress object, use "DOT" notation obj1
