 /* Creating an array
    Replacing Elements
    Adding elements
    Retreiving an element 
    Concept of length
 */ 

    let arr1 = [10, 20, 30,  40, 50];

    let arr2 = ["Mon","Tue","Wed","Thur","Fri"]

    console.log("\n REPLACING ELEMENTS")
    arr1[1] = 100;
    arr2[0] = "Sun";
    console.log(arr1);
    console.log(arr2);

    console.log("\n ADDING ELEMENTS") // in Js elements can be added at any index...
    // assigning to an index value adds an element at that specific position 
    arr1[10] = 120;
    console.log(arr1) // when outputing, it specifies number of elements in between

    console.log("\n RETREIVING ELEMENTS")
    // elements are retrieved by using sqaure brackets and specifying the index
    console.log(arr1[0]) // returns the first element of the array 1
    console.log(arr2[4]) // returns the fifth element of the array 2

    console.log("\n CONCEPT OF LENGTH"
        // length is a property of arrays that returns the number of elements in the array
    )
    console.log(arr1.length) // got 11 elemets juss cuz we added another element at the 10th pos
    console.log(arr2.length)