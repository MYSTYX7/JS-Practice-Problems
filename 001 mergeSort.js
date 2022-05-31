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

let arr1 = [2, 4, 1, 83, 52, 7, 42];
let arr2 = [353, 345, 73, 7, 25, 82, 5, 863, 234];
let arr3 = [23, 6, 13, 75, 32];
console.log(mergeSort(arr1));
console.log(mergeSort(arr2));
console.log(mergeSort(arr3));
