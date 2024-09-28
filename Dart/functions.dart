void main(){
// greet(){
//   print("Hi");
// }

// // To run a function, u must call it
// greet();

greet(){
 return ("\nHi babe");
}

//Nothing happens unless we print the function
// print(greet());

// OR
var myFunc = greet();
print(myFunc);

//Using parameters
calling (String name1, name2){
  return "Hi $name1 and ${name2}";
}

// print(calling("Tadiwa","Blessie"));
// all param must have represantatives otherwise an error occurs
var girls = calling("Tadiwa", "Blessie");
print(girls);


// Optional positional parameters are wrapped in brackes [name2] and
// if not filed, it will return null
babes(String name1, [name2]){
  return "Hi $name1 and ${name2}";
}

var cheeks = babes("Tadiwa");
print(cheeks);


//Named parameter use curly brackets
ladies(String name1, {name2}){
  return "Hi $name1 and ${name2}!\n";
}

var pussy = ladies("Tadiwa", name2:"Blessed");
print(pussy);

// if Blessed is not passed, it will return null

//Using default
love(String name1, {name2 = "Slut"}){
  return "Hi $name1 and ${name2}";
}

var sluts = love("Tadiwa");
print(sluts);
// I will print the default Slut if param 2 is not there 
//otherwise param2 will be printed

friends(String name1, {name2 = "Slut"}){
  return "Hi $name1 and ${name2}";
}

var whore = friends("Tadiwa", name2: "Boobie");
print(whore);

}
