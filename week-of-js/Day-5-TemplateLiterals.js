function sides(literals, ...expressions) {
  const area = expressions[0];
  const perimeter = expressions[1];

  const s1 = (perimeter + Math.sqrt(perimeter * perimeter - 16 * area)) / 4;
  const s2 = (perimeter - Math.sqrt(perimeter * perimeter - 16 * area)) / 4;
  return [s1, s2].sort();
}

let s1 = 10;
let s2 = 14;

[s1, s2] = [s1, s2].sort();

const [x, y] = sides`The area is: ${s1 * s2}.\nThe perimeter is: ${
  2 * (s1 + s2)
}.`;
console.log(s1 === x ? s1 : -1);
console.log(s2 === y ? s2 : -1);
