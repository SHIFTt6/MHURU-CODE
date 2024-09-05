/**
 * We can create an object using a function
 * this is done to reduce a loy of written code for example instead of writting 100 objects of students
 * we can simply create a function which accepts arguements which we want to make properties for
 * 1st create an object
 * 2nd assign property value from the args of a fn and then
 * return the object
 */

const create_Student = function(name, age, country, company){
    Student = {}
    Student.name = name
    Student.age = age
    Student.country = country
    Student.company = company
    return Student
}

const s1 = create_Student("Tawana", 24, "Zimbabwe", "Delta")
const s2 = create_Student("Nyasha", 18, "Lesotho", "Maheu")

console.log(s1)
console.log(s2)

/**
 * INSTEAD OF WRITTING 100 objects of each pupil
 */
console.log("\nINSTEAD OF WRITTING")
let Pupil1 = {
    name: "Tawana",
    age: 24,
    country: "India",
    company: "Yutong"
}
console.log(Pupil1)

let Pupil2 = {
    name: "Nyasha",
    age: 26,
    country: "USA",
    company: "Dodge"
}
console.log(Pupil2)
