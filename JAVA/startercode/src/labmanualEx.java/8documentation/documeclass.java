/*
 * documeclass Represents a car with make, model, and year.
*/
public class documeclass {

        String make;
        String model;
        int year;
    
        // Constructor to initialize the car with make, model, and year.

        public documeclass (String make, String model, int year) {
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
    
    
