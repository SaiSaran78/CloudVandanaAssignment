import java.util.HashSet;
import java.util.Scanner;
import java.util.Set;

public class JavaQuestion3 {
    public static void main(String[] args) {
        try (Scanner scanner = new Scanner(System.in)) {
            System.out.println("Enter a sentence: ");
            String sentence = scanner.nextLine();

            // Convert the sentence to lowercase
            sentence = sentence.toLowerCase();

            // Create a set to store the unique alphabet characters in the sentence
            Set<Character> uniqueAlphabetCharacters = new HashSet<>();

            // Iterate over the sentence and add each unique alphabet character to the set
            for (char character : sentence.toCharArray()) {
                if (Character.isLetter(character)) {
                    uniqueAlphabetCharacters.add(character);
                }
            }

            // Check if the set contains all 26 letters of the alphabet
            if (uniqueAlphabetCharacters.size() == 26) {
                System.out.println("The sentence is a pangram.");
            } else {
                System.out.println("The sentence is not a pangram.");
            }
        }
    }
}