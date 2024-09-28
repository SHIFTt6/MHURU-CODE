void main(){
  //for loop
  var num = 5;

  for(var i = num; i>=1; i--){
    print("${i}\n");
    //U can use 5 instead of num
  }

  for(var i = 0; i<=5; i++){
    print(i);
   }

  //For in loop used to iterate over something eg array, list
  var names = ["Tina","Steve","John"];
  for (var element in names) {
    print("\n$element");
  }

  //While loop using 1st example
  // while (0<=num) {
  //   print(num);
  //   num++;
  // }

}