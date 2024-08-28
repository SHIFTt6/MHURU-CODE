public class overloadedmeths {
    public static void main(String[] args) {
        System.out.println(add(2,3,4));
    }
    static int add(int a, int b){
        return a+b;
    }
    static int add(int a, int b, int c){
        return a + b + c;
    }
    /**
     * @param a
     * @param b
     * @param c
     * @param d
     * @return
     */
    static int add(int a, int b, int c, int d){
        return a + b + c + d; 
    }

}
