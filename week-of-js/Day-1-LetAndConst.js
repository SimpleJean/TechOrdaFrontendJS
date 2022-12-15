function main(rad) {
  const PI = Math.PI;
  let radius = parseFloat(rad);

  let area = PI * radius * radius;
  console.log(area);

  let perimeter = 2 * PI * radius;
  console.log(perimeter);
}
main(2.6);
