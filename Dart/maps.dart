void main(){
  // keys: values
  var toppings = {"John":1,"Mercy":2};
  print(toppings);

  //show values
  print(toppings.values);

  //Show keys
  print(toppings.keys);

  //Add some
  toppings ["Tim"] = 3;
  print(toppings);

  //Add many
  toppings.addAll({"Grace":4,"Hillary":5});
  print(toppings);

  //Remove Something
  toppings.remove("Hillary");
  print(toppings);

  //Remove All
  toppings.clear();
  print(toppings);

}