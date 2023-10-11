// Take a sentence as an input and reverse every word in that sentence
const reverseWords = (sentence) => {
    const word = sentence.split(" ");
    const reversedWord = word.map((word) => word.split("").reverse().join(""));
    const reversedSentence = reversedWord.join(" ");
    return reversedSentence;
  };
  const Sentence = "Hello , I am M S Sai Saran";
  const reversedSentence = reverseWords(inputSentence);
  console.log(reversedSentence);
  