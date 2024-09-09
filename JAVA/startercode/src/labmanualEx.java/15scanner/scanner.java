import java.util.Scanner;
public class scanner {
    public static void main(String[] args) {


        Scanner scanner = new Scanner(System.in);

        try {
            System.out.print("\nEnter a number: ");
            int input = scanner.nextInt();

            System.out.println("You entered: " + input);

            // Read another line (to consume newline character)
            scanner.nextLine();  // This is necessary after nextInt()

            System.out.print("\nEnter a string: ");
            String strInput = scanner.nextLine();
            System.out.println("You entered: " + strInput);

            // Close the Scanner to free up resources
            scanner.close();
        } catch (Exception e) {
            System.err.println("An error occurred: " + e.getMessage());
        }
    }
}

    