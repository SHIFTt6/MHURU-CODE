public class countmain {
    public static void main(String[] args) {
        count myCounter = new count();
        System.out.println("Initial count: " + myCounter.getCount());
        myCounter.increment();
        System.out.println("Count after increments: " + myCounter.getCount());
    }
}