const btn = document.querySelector('#btn');
let count = 0;
const add = function () {
  count++;
  btn.textContent = count;
};

btn.addEventListener('click', add);
