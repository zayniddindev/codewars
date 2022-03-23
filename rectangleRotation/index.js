function rectangleRotation(a, b) {
  let w = Math.floor(a / Math.sqrt(2));
  let h = Math.floor(b / Math.sqrt(2));
  let con = Math.min(a, b) / Math.sqrt(2);
  if (con > 0.5) return w * h + (w + 1) * (h + 1);
  else return w * h + (w + 1) * (h + 1) + 1;
}
console.log(rectangleRotation(6, 4));
