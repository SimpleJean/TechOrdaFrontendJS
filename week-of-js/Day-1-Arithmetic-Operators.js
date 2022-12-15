const length = 3;
const width = 4.5;

function getArea(length, width) {
  let area;
  area = length * width;

  return area;
}

function getPerimeter(length, width) {
  let perimeter;
  perimeter = 2 * (length + width);

  return perimeter;
}

console.log(getArea(length, width));
console.log(getPerimeter(length, width));
