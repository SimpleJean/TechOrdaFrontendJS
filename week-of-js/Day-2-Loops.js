function vowelsAndConsonants(s) {
  for (let i = 0; i < s.length; i++) {
    if (s[i].match(/[aeiou]/gi)) {
      console.log(s[i]);
    }
  }
  for (let i = 0; i < s.length; i++) {
    if (s[i].match(/[^aeiou]/gi)) {
      console.log(s[i]);
    }
  }
}

vowelsAndConsonants('javascriptloops');
