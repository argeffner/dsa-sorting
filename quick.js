/*
pivot accepts an array, starting index, and ending index
You can assume the pivot is always the first element
*/

// The pivot function they wrote does not return the correct pivot
// This function correctly pivots when tested on quicksort
function pivot(arr, low=0, high=arr.length - 1){
  let pVal = arr[high];
  let pIdx = low;

  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  for (let i = low; i < high; i++) {
    if (arr[i] < pVal) {
      swap(arr, pIdx, i);
      pIdx++;
    }
  }
  swap(arr, pIdx, high)
  return pIdx;
}

/*
quickSort accepts an array, left index, and right index
*/

function quickSort(arr, left=0, right=arr.length - 1) {
  if (left >= right) return;

  let pivIdx = pivot(arr, left, right);
  quickSort(arr, left, pivIdx - 1);
  quickSort(arr, pivIdx + 1, right);
  return arr;
}

module.exports = quickSort;