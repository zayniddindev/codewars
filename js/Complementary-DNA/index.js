function dnaStrand(dna) {
  let reverseSide = '';
  const dnaDict = {
    A: 'T',
    T: 'A',
    C: 'G',
    G: 'C',
  };

  for (let i = 0; i < dna.length; i++) {
    const elem = dna[i];
    reverseSide += dnaDict[elem];
  }

  return reverseSide;
}

console.log(dnaStrand('ATTGC')); //TAACG
