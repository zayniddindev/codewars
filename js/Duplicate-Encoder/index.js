function duplicateEncode(word) {
  const duplicates = [];
  const lowerCasedWord = word.toLowerCase();

  for (let i = 0; i < word.length; i++) {
    const letter = lowerCasedWord[i];
    const firstIndex = lowerCasedWord.indexOf(letter);
    const lastIndex = lowerCasedWord.lastIndexOf(letter);
    if (firstIndex !== lastIndex && !duplicates.includes(letter)) {
      duplicates.push(letter);
    }
  }

  return lowerCasedWord.replaceAll(/./g, (l) => {
    return duplicates.includes(l) ? ')' : '(';
  });
}

console.log(duplicateEncode('Success')); // )())())
