export function twoNumberSum(array, targerSum) {
  const nums = {};
  let result = [];

  array.forEach((num) => {
    if (nums[targerSum - num]) {
      result = [targerSum - num, num];
    } else {
      nums[num] = true;
    }
  });

  return result;
}

