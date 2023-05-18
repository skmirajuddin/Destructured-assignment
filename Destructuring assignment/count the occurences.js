function countWordOccurrences(text) {
  const wordCounts = new Map();
  const words = text.split(" ");

  for (const word of words) {
    if (wordCounts.has(word)) {
      wordCounts.set(word, wordCounts.get(word) + 1);
    } else {
      wordCounts.set(word, 1);
    }
  }

  return wordCounts;
}

const text = "";

const wordCounts = countWordOccurrences(text);
for (const [word, count] of wordCounts) {
  console.log(`${word}: ${count}`);
}
