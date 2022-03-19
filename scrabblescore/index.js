const score = (str) => {
  let score = 0;
  let ranges = ["AEIOULNRST", "DG", "BCMP", "FHVWY", "K", "JX", "QZ"];
  str = str.split("");
  for (let i = 0; i < str.length; i++) {
    let l = str[i];
    for (let j = 0; j < ranges.length; j++) {
      if (ranges[j].includes(l) || ranges[j].toLowerCase().includes(l)){
          if(j == 5)  score += 8;
          else if(j == 6) score += 10;
          else score += j+1;
      };
    }
  }
  return score;
};

console.log(score("quirky"));
