public class constructorMain {
    public static void main(String[] args) {
    
        Dog  dog1 = new Dog("RANGER", 3);// to customize name and age of dog1(each individual dog) add 
                                                  // parameters to the constructor

        System.out.println("\n" + dog1.name +  " is " + dog1.age + " years old");

    }  
}
