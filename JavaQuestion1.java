import java.util.*;

public class JavaQuestion1 {
    public static void main(String[] args) {
        int[] Array = {1, 2, 3, 4, 5, 6, 7};
        shuffleArray(Array);
        System.out.println(Arrays.toString(Array));
    }

    public static void shuffleArray(int[] array) {
        Random rnd = new Random();
        for (int i = array.length - 1; i > 0; i--) {
            int index = rnd.nextInt(i + 1);
            // Swap elements at index i and index
            int temp = array[i];
            array[i] = array[index];
            array[index] = temp;
        }
    }
}
