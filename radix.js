/** One solution  

function getDigit(num, idx) {
  return Math.floor(Math.abs(num)/Math.pow(10, idx)) % 10;
}
function digitCount(num) {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}
function mostDigits(nums) {
    let maxDigits = 0;
    for (let i = 0; i < nums.length; i++) {
      maxDigits = Math.max(maxDigits, digitCount(nums[i]));
    }
    return maxDigits;
  }
function radixSort() {
 let maxDigitCount = mostDigits(nums);
  for (let k = 0; k < maxDigitCount; k++) {
    let digitBuckets = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < nums.length; i++) {
      let num = nums[i];
      let digit = getDigit(num, k);
      digitBuckets[digit].push(num);
    }
    nums = [].concat(...digitBuckets);
  }
  return nums;
}
module.exports = { getDigit, digitCount, mostDigits, radixSort };

*/

/** Another solution  */

function getNum(num, idx) {
// turn number into string and count its length
  const numStr = String(num);
  let last = numStr.length - 1;
  let theNum = numStr[last - idx];
  if (theNum === undefined) return 0;
  else return theNum; 
};

function bigNum(arr) {
  // remember to make giggest into string to compare length
  let biggest = '0';

  arr.forEach(num => {
    const numStr =String(num);
    if (numStr.length > biggest.length) {
        biggest = numStr;
    }
  });
  return biggest.length;
}

function radixSort(arr) {
  let maxLength = bigNum(arr);
  for (let i=0; i < maxLength; i++) {
    let bucket = Array.from({length: 10}, () => []);
    for (let j=0; j < arr.length; j++) {
      let val = arr[j];
      let num = getNum(val, i);
      if (num !== undefined) bucket[num].push(val);
    }
    // the older and more taditional way to concat the data
    // arr = [].concat(...bucket);
   
    // shorter method
    arr = bucket.flat();
  }
  return arr;
}
module.exports = {getNm, bigNum, radixSort};