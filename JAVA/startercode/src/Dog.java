public class Dog{
    String  name;
    int age;

    public  Dog(String name){ // constructor name is the same as class name i.e Dog and wont have return type
    this.name = name;
    }
    // end{code}

    public  Dog(int  age){
        this.age = age;
        }

    // constructor with multiple parameters
    public Dog(String name,  int age) {
            this.name = name;
            this.age = age;
    }

}