// used to iterate over properties of an object

let periodic_table = {
    He: "Helium",
    Li: "Lithium",
    Be: "Beryllium",
    C: "Carbon",
    N: "Nitrogen",
    Ne:  "Neon",
    Na: "Sodium",
    Mg: "Magnesium",
}

for (const key in periodic_table) {
        console.log(key)// outputs all the keys of the property names of this particular object
        console.log(periodic_table[key])// outputs the value of each property
}
