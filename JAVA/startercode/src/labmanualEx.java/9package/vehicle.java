
public class vehicle {
    
    String make;
    String model;
    int year;

    // Constructor
    public vehicle(String make, String model, int year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    
    // Method to display car details
    public void displayDetails() {
        System.out.println("Make: " + make);
        System.out.println("Model: " + model);
        System.out.println("Year: " + year);
    }
   vehicle mypack = new vehicle("Toyota", "Corolla", 2019);

       
}
// javac -d. vehicle.java        used to create a package
// javac  vehiclepack.java       used to compile



