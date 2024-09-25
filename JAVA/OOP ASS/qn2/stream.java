package qn2;
import java.util.ArrayList;
import java.util.List;


public class stream {
    public static void main(String[] args) {

        List<Integer> numbers = new ArrayList<>();
        numbers.add(1);
        numbers.add(4);
        numbers.add(5);
        numbers.add(20);
        numbers.add(30);
        numbers.add(6);

        numbers.stream()
                .filter(n -> n % 5 == 0)
                .forEach(System.out::println);
    }
}

