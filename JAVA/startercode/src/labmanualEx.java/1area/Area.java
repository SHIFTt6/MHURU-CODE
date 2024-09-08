public class Area {
    public static void main(String[] args) {
        
        // Test the calculateArea method
        double area = calculateArea(5, 3);
        System.out.println("The area is: " + area);
    }

    public static double calculateArea(double length, double width) {
        return length * width;
    }
}
