// extracting strings from the main using substr(,) thats the startindex
// and length of cut inside parethesis. 

let str1 = 'Your best friend is shawn'

console.log(str1.substr(2,7))
console.log(str1.substring(2,7))

// if length of cut isnt specified, we will get everything remaining in the string
// substring -- start index and end of cut
console.log("REVERSING A STRING")
 

// A B C D E F G
// 0 1 2 3 4 5 6

let str2 = 'ABCDEFG'
let str3 = 'HIJKLMN'
let p = ''
// we reverse the loop and print the string from the end to the start
// when adding empty string i.e 'p' we add it b4 writing the loop so that
// it is written in reversed manner p = p+str3

for(let i = str3.length-1;i >= 0;i--){
    p += str3[i]
}
console.log(p)

//  REVERSING A STRING USING REVERSE METHOD
// using a normal for loop buh when adding, we add empty string i.e 'temp
// after writing the loop

let temp =''
for(i = 0;  i <= str2.length-1; i++){
    temp = str2[i] + temp
}
console.log(temp)

