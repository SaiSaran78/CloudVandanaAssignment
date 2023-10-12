// Take a sentence as an input and reverse every word in that sentence
const reverseWord = (sentence) => {
  const word = sentence.split(" ");
  const reverseWord = word.map((word) => word.split("").reverse().join(""));
  const reversedSentence = reverseWord.join(" ");
  return reversedSentence;
};

const Sentence = "Hello , I am M S Sai Saran";
const reversedSentence = reverseWord(Sentence);
console.log(reversedSentence);
