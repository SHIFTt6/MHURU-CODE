public class intparse {
    public static void main(String[] args) {

                try {
                    // Parse a valid integer string
                    String validInput = "123";
                    int number = Integer.parseInt(validInput);
                    System.out.println("Parsed integer: " + number);
        
                    // Attempt to parse an invalid integer string
                    String invalidInput = "abc";
                    number = Integer.parseInt(invalidInput);  // This will throw an exception
        
                    // Handle the exception
                } catch (NumberFormatException e) {
                    System.out.println("Error: Invalid input. Please enter a valid integer.");
                }
            }
        }
        