function modifyArray(nums) {
  const newModifiedArr = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
      newModifiedArr.push(nums[i] * 2);
    } else {
      newModifiedArr.push(nums[i] * 3);
    }
  }
  
  return newModifiedArr;
}

const n = '1 2 3 4 5';
const a = n.split(' ').map(Number);

console.log(modifyArray(a).toString().split(',').join(' '));
