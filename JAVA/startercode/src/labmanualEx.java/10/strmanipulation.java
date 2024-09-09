public class strmanipulation {
    public static void main(String[] args) {

String message = "Gneash";

// Get the length of the string
int length = message.length();
System.out.println("Length of the message: " + length);

// Concatenate strings
String greeting = "Good morning ";
String fullMessage = greeting + message;
System.out.println("Full message: " + fullMessage);

// Extract substring
String part = message.substring(0, 5);
System.out.println("Part of the message: " + part);

// Replace text
String modifiedMessage = message.replace("World", "Universe");
System.out.println("Modified message: " + modifiedMessage);

// Convert to uppercase/lowercase
String upperCase = message.toUpperCase();
String lowerCase = message.toLowerCase();
System.out.println("Uppercase: " + upperCase);
System.out.println("Lowercase: " + lowerCase);

// Trim whitespace
String trimmed = message.trim();
System.out.println("Trimmed message: " + trimmed);

    }
    
}
