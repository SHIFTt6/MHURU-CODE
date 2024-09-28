void main(){
  var  a,b,c;

//String to double or int use parse fn

a = 10;
b = "2";
var e = "20.1";
//Lets add them 2gether buh to do so change string to int 

c = a + int.parse(b);
var d = int.parse(b) + double.parse(e);

print("$a + $b = $c");
print("$b + $e = $d");


//Int to String
var x,y,z;

x = 1;
y = "Milk";

z =  x.toString() + y;
print("\n$x $y");
}