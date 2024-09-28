
import 'dart:io';
  
void main(){

 print("Enter Number\n");
  // var num1 = 1;

 
  var num1 = stdin.readLineSync();
  var num = int.parse(num1 ?? '0');


    //loop
    // while (num<=100) {

      if(num%5==0&&num%3==0){

        print("$num FIZZBUZZ"); 

      }else if(num%5==0){
        print("$num BUZZ");

      }else if(num%3==0){
        print("$num FIZZ");

      }else
      print("$num NULL");

      //Increment the
      // num++;  
    }
