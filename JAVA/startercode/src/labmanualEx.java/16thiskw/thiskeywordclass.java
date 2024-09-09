public class thiskeywordclass {

        private String brand;
        private String model;
        private int year;
    
        // Constructor
        public thiskeywordclass (String brand, String model, int year) {
            // Initialize class fields using this
            this.brand = brand;
            this.model = model;
            this.year = year;
        }
    
        // Getter methods
        public String getBrand() {
            return brand;
        }
    
        public String getModel() {
            return model;
        }
    
        public int getYear() {
            return year;
        }
    
        // Method to display car details
        public void displayDetails() {
            System.out.println("Car Details:");
            System.out.println("Brand: " + brand);
            System.out.println("Model: " + model);
            System.out.println("Year: " + year);
        }
    
    }
    
    
