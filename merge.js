function merge(arr1, arr2) {
  let arr = [];
  let i = 0;
  let j = 0;
  const pushArr = (array, idx) => arr.push(array[idx]);
  
  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] < arr1[i]) {
      pushArr(arr2, j);
      j++;
    } else {
      pushArr(arr1, i);
      i++;
      }
  }
  while (i < arr1.length) {
    pushArr(arr1, i);
    i++;
  }
  while (j < arr2.length) {
      pushArr(arr2, j);
      j++;
  }
  return arr;
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));
  return merge(left, right)
}

module.exports = { merge, mergeSort};