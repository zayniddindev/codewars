function cakes(r, a) {
  let num = [];
  let rec = Object.getOwnPropertyNames(r);
  let ingr = Object.getOwnPropertyNames(a);
  if (rec.length > ingr.length) return 0;
  for (let i = 0; i < rec.length; i++) {
    if (!ingr.includes(rec[i])) return 0;
    console.log(r[rec[i]], a[rec[i]], Math.floor(a[rec[i]] / r[rec[i]]));
    num.push(Math.floor(a[rec[i]] / r[rec[i]]))
  }
  return Math.min(...num)
}

recipe = { flour: 500, sugar: 200, eggs: 1 };
available = { flour: 1200, sugar: 1200, eggs: 5, milk: 200 };
console.log(cakes(recipe, available));
