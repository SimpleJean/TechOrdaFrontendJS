function reverseString(s) {
  try {
    let str = s.split('').reverse().join('');
    console.log(str);
  } catch (e) {
    console.log(e.message);
    console.log(s);
  }
}

//Put a Number for catch an error
console.log(reverseString('1234'));
