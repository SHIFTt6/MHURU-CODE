/** INCLUDES used to search to find if the word exists in an array
 * INDEXOF  used to find the index of the word in the array
 * LASTINDEXOF  used to find the last index of the word in the array

 */

let arr1 = ["John",
    "Mellisa",
    "Erica",
    "Heather",
    "Chloe",
    "Hannah",
    "Andrea",
    "Mellisa"
]
console.log(arr1.includes("Mellisa")) // true
console.log(arr1.includes("Mellisa", 1)) // true
console.log(arr1.indexOf("Mellisa"))    // 1
console.log(arr1.lastIndexOf("Mellisa")) // 7



