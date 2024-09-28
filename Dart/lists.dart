void main(){
  var emptylist = [];
  print(emptylist);

//Adding a value
  emptylist.add(21);
  print(emptylist);

// Adding multiple
emptylist.addAll([22,23,24,25]);
  print(emptylist);

// Adding at specific position
// emptylist.insert(index, element)
emptylist.insert(3, 200);
  print(emptylist);

// Insert many
emptylist.insertAll(3,[210,320,450]);
  print(emptylist);

//Mixed list
var mixedlist = [1,"John",2,"Mercy"];
  print(mixedlist);

//Remove from list 
mixedlist.remove("John");
  print(mixedlist);

//Remove at specific position fo example if we have many Johns
mixedlist.removeAt(2);
  print(mixedlist);

}