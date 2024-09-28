
void main(){

  var num =1;

    //loop
    while (num<=100) {

      if(num%5==0&&num%3==0){
        print("$num FIZZBUZZ"); 

      }else if(num%5==0){
        print("$num BUZZ");

      }else if(num%3==0){
        print("$num FIZZ");

      }else
      print("$num NULL");

      //Increment the
      num++;  
    }
}