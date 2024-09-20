import java.util.Random;

public class code {
    public static void main(String[] args) {
        // Create a Random object
        Random rand = new Random();

        // Create two 2x2 matrices with random numbers
        int[][] matrix1 = new int[2][2];
        int[][] matrix2 = new int[2][2];

        // Initialize the matrices with random numbers
        for (int i = 0; i < 2; i++) {
            for (int j = 0; j < 2; j++) {
                matrix1[i][j] = rand.nextInt(100); // random numbers between 0 and 99
                matrix2[i][j] = rand.nextInt(100); // random numbers between 0 and 99
            }
        }

        // Print the matrices
        System.out.println("Matrix 1:");
        for (int i = 0; i < 2; i++) {
            for (int j = 0; j < 2; j++) {
                System.out.print(matrix1[i][j] + " ");
            }
            System.out.println();
        }

        System.out.println("Matrix 2:");
        for (int i = 0; i < 2; i++) {
            for (int j = 0; j < 2; j++) {
                System.out.print(matrix2[i][j] + " ");
            }
            System.out.println();
        }
    }
}