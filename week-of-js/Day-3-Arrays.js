function getSecondLargest(nums) {
  let mySet = [...new Set(nums)];
  
  let secondLargesNum = mySet.sort(function (a, b) {
    return b - a;
  });
  return secondLargesNum[1];
}
const nums = [2, 3, 6, 6, 5];
console.log(getSecondLargest(nums));
