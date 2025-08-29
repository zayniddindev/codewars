function generateHashtag(str) {
  const result = str
    .split(' ')
    .filter((s) => s.length > 0)
    .map((s) => s[0].toUpperCase() + s.slice(1).toLowerCase())
    .join('');

  return `#${result}`.length > 140
    ? false
    : result.length === 0
    ? false
    : `#${result}`;
}

console.log(generateHashtag('   ')); //#HelloThereThanksForTryingMyKata
