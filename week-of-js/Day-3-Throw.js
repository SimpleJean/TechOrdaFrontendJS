function isPositive(a) {
  if (a > 0) {
    return 'YES';
  } else if (a === 0) {
    throw Error('Zero Error');
  } else if (a < 0) {
    throw Error(console.log('Negative Error'));
  }
}

//try with a negative number or a positive number and Zero
console.log(isPositive(1));
