function getCount(objects) {
  let count = 0;

  for (let obj of objects) {
    if (obj.x === obj.y) {
      count++;
    }
  }
  return count;
}

const obj = [
  { x: 1, y: 1 },
  { x: 2, y: 3 },
  { x: 3, y: 3 },
  { x: 3, y: 4 },
  { x: 4, y: 5 },
];
console.log(getCount(obj));
