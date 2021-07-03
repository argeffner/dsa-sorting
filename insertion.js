function insertionSort(arr) {
  let i = 1;
  const swap = (arr, idx1, idx2) => {
      [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    };
  
  while (i < arr.length) {
    if (arr[i] < arr[i-1]) {
      swap(arr, i, i-1);
      i++;
    } else {
      i++;
    }
  }
  return arr;
}
module.exports = insertionSort;