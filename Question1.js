// Take a sentence as an input and reverse every word in that sentence
const reverseWords = (sentence) => {
  const words = sentence.split(" ");
  const reverseWords = words.map((word) => word.split("").reverse().join(""));
  const reversedSentence = reverseWords.join(" ");
  return reversedSentence;
};

const Sentence = "Hello , I am M S Sai Saran";
const reversedSentence = reverseWords(Sentence);
console.log(reversedSentence);
