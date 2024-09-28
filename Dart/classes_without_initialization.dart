void main(){

//If we run this we will get null values
Person p1 = new Person();
p1.showdata();


//To show data then pass parameters to the method
p1.addData('Mike','Male',24);
// p1.name = 'Mozzy'; // This will update the current name
p1.showdata();

}

//Captalise class name
class Person{

   String? name,sex;
   int? age;


//Classes withou initialisation wont use a constructor hence uses a method
//Method
 void addData(String name,sex, int age){

   this.name= name;
   this.sex = sex;
   this.age = age;

  }

  //method -- fns when not in class and methods if in class
  void showdata(){
    print('Name = $name');
    print('Sex = $sex');
    print('Age = $age\n');

  }  
}


