function twoSum(numbers, target) {
  let result = [];
  let left = 0;
  let right = numbers.length - 1;

  while (left < right) {
    let sum = numbers[left] + numbers[right];
    if (sum === target) {
      result.push(left, right);
      return result;
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }
  return result;
}
