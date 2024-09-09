import java.util.StringTokenizer;

public class tokenizer {

    public static void main(String[] args) {
        // Create a string to tokenize
        String input = "Java is fun! Programming is awesome.";

        // Create a StringTokenizer object
        StringTokenizer st = new StringTokenizer(input);

        // Tokenize and print the string
        while (st.hasMoreTokens()) {
            System.out.println(st.nextToken());
        }

        
    }
}

    

