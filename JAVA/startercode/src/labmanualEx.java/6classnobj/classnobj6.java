public class classnobj6 {
    String make;
    String model;
    int year;

    // Constructor
    public classnobj6 (String make, String model, int year) {
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
}


