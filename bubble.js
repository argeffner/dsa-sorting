function bubbleSort(arr) {
  for (let i=0; i < arr.length; i++) {
    let last = false;
    for (let j=0; j < arr.length - i; j++){
      if (arr[j] > arr[j+1]) {
        let a = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = a;
        last = true;
      }
    }
    // this reduces the amount of times it goes through iterations
    if(!last) break;
  }
  return arr;
}

module.exports = bubbleSort;