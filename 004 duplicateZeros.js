/* Given a fixed-length integer array arr,
duplicate each occurrence of zero,
shifting the remaining elements to the right.

Note that elements beyond the length of the original array are not written. 
Do the above modifications to the input array in place and do not return anything.
*/
const duplicateZeros = (arr) => {
  const red = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      red.push(arr[i]);
      red.push(arr[i]);
    } else {
      red.push(arr[i]);
    }
  }
  red.splice(arr.length);
  arr.forEach((item, index) => {
    arr[index] = red[index];
  });
  console.log(arr);
};

let arr1 = [1, 0, 2, 3, 0, 4, 5, 0];
let arr2 = [1, 2, 3];
let arr3 = [6, 7, 0, 4, 0, 3];
duplicateZeros(arr1);
duplicateZeros(arr2);
duplicateZeros(arr3);
