// returns element itself (not the index)
function binarySearch(arr, num) {
  if (arr.length === 0) {
    return null;
  }
  let middle;
  if (arr.length === 1) {
    middle = arr[0];
  } else {
    middle = Math.ceil(arr.length / 2);
  }
  if (arr[middle] === num) {
    return arr[middle];
  }

  let lower = arr.slice(0, middle);
  let upper = arr.slice(middle);

  if (num < arr[middle]) {
    return binarySearch(lower, num);
  } else {
    return binarySearch(upper, num);
  }
}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 9, 11, 34, 76, 90, 931, 9999], 55));
