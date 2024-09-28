import 'dart:io';
// from dart, import io

void main(){
  print("Enter Name");

  var name = stdin.readLineSync();

  // String? name = stdin.readLineSync();

  // Only works for Strings

  // a String? is nullable that is it can be null i.e a user 
  // cannot type name whilst Stiring isnt nullable
  // For userInput cater for nullability
  print("Hi $name");


  //User Input Type conversion
  print("Enter Number");

  var num1 = stdin.readLineSync();
  var num2 = int.parse(num1 ?? '0') +99;

  print("You have entered $num1 + 99 = $num2");

}
