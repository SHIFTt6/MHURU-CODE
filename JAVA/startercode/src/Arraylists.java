import java.util.ArrayList;

public class Arraylists {
    public static void main(String[] args) throws Exception {
        ArrayList<String> food = new ArrayList<>();
        food.add("Pizza");
        food.add("Bread");
        food.add("Soup");

        //System.out.println(food);
        for(int i=0; i<food.size(); i++){
           System.out.println(food.get(i));
        }
    }

}
