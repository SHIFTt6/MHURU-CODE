package qn3;

import java.util.InputMismatchException;
import java.util.Scanner;

// Define the custom exception class
class AgeOutOfRangeException extends Exception {
    public AgeOutOfRangeException(String message) {
        super(message);
    }
}

public class overage {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        try {
            System.out.print("Enter your age: ");
            int age = scanner.nextInt(); // Get the age from the user
            validateAge(age);
            
        } catch (InputMismatchException e) {
            System.out.println("Error: Invalid input. Please enter a valid age.");
            
        } catch (AgeOutOfRangeException e) {
            System.out.println("Error: " + e.getMessage());

        } finally {
            scanner.close(); // Close the Scanner object
        }
    }

    public static void validateAge(int age) throws AgeOutOfRangeException {
        if (age < 18 || age > 65) {
            throw new AgeOutOfRangeException("INVALID! Age must be between 18 and 65!");
        }
        System.out.println("Age is valid!");
    }
}