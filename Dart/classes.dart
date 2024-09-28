void main(){

//Person 1
Person p1 = new Person('Shawn','Male', 44);
p1.showdata();
print(p1.name);

//Person 2
Person p2 = new Person('Mary','Female', 38);
p2.showdata();

}

//Captalise class name
class Person{

   String? name,sex;
   int? age;


//Constructor name must be similar to class name
//Constructor
 Person(String name,sex, int age){

   this.name= name;
   this.sex = sex;
   this.age = age;

  }

  //method -- fns when not in class and methods if in class
  void showdata(){
    print('Name = $name');
    print('Sex = $sex');
    print('Age = $age');

  }  
}


