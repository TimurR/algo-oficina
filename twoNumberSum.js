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

export function twoNumberSumP(array, targetSum) {
  const sortedArr = array.sort();
  let left = 0;
  let right = array.length - 1;

  while (left < right) {
    let currentSum = array[left] + array[right];
    if (currentSum === targetSum) {
      return [array[left], array[right]];
    } else if (currentSum < targetSum) {
      left++;
    } else if (currentSum > targetSum) {
      right--;
    }
  }

  return [];
}
