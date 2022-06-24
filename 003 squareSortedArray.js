/* Given an integer array nums sorted in non-decreasing order, 
return an array of the squares of each number sorted in non-decreasing order. */

// Squaring the elements of an array
var sortedSquares = function (nums) {
  let red = [];
  for (let i = 0; i < nums.length; i++) {
    red[i] = nums[i] * nums[i];
  }
  return mergeSort(red);
};

// Sorting the elements of an array
const mergeSort = (array) => {
  const middle = array.length / 2;

  if (array.length < 2) {
    return array;
  }

  const left = array.splice(0, middle);

  return merge(mergeSort(left), mergeSort(array));
};

const merge = (left, right) => {
  let arr = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      arr.push(left.shift());
    } else {
      arr.push(right.shift());
    }
  }
  return [...arr, ...left, ...right];
};
