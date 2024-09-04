// FOR EACH LOOPs are used when executing a function
// syntax : <arrayName>.forEach() and inside the curly braces thus where we create a function
/* the function will have no name because it will be called no where except within the curly braces
   The fn will have 3 arguments that is the index, value/item and the array itself and can be optional
 */

   console.log("\nFOR EACH LOOP")

   let  numbers = [125, 225, 300, 450, 550, 670,]

   numbers.forEach(function (item,index,Array) {
       // console.log("Price")// this will outputs price 6 times thus the # of elements in an array
        
       // console.log("Price:", item)// this  will output the price of each item in the array

       // console.log("Index:",index + " " + "Price",item)// this will outputs same as top together with index

        console.log("Index:",index + " " + "Price",item + "_-_" + Array)
        // this  will output the index and price of each item in the array and the array itself
        // to output as index then item in the fn parameters, we start with item then index and lastly array

   })