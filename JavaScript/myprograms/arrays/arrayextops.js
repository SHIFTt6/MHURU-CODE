/**JOIN used to convert an array to a string
 * TOSTRING used to get string represantation of an array
 * SPLIT converting string to an array
 * REVERSE used to reverse an array
 * SLICE used to get some part of an array
 */

let colours = ["Black", "White", "Green", "Blue", "Pink", "Brown"]

console.log(colours.join())
console.log(colours.toString())
// difference between join and to string is that join can be used with a custom delimiter such as 
// underscore, unlike tostring which uses on a comma

let s = "A_B_C_D"
console.log(s.split("_")) // Converted to an array removing underscores

console.log(colours.reverse())
console.log(colours.slice(2))
console.log(colours.slice(1,3))

/**.slice(2) means that the array is to be sliced starting from 2nd index up to the end
 * .slice(index,end-1) means that the array is to be sliced starting from the 1st index up to and not
 * including the last index .slice(1,3)
 */