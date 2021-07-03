function selectionSort(arr) {
  
  const swap = (arr, idx1, idx2) => {
      [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };
  
  for (let i=0; i < arr.length; i++) {
    let minI = i;
    for (let j=i; j < arr.length; j++) {
      if (arr[j] < arr[minI]) {
          minI = j;
      }
      swap(arr, i, minI);
    }
  }
  
 return arr;
}

module.exports = selectionSort;