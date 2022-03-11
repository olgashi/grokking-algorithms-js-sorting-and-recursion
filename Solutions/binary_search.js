const arr = [1, 5, 7, 12, 44, 45, 49, 52, 55, 67, 88, 90, 91, 100];

const num1 = 45;
const num2 = 100;
const num3 = 69;

const binarySearch = function(arr, num) {
  let middle = Math.ceil(arr.length / 2);

  let lower = 0;
  let upper = arr.length - 1;

  while (lower <= upper) {
    if (arr[middle] === num) {
      return middle;
    }
    if (num < arr[middle]) {
      upper = middle - 1;
    } else {
      lower = middle + 1;
    }
    middle = Math.ceil((lower + upper) / 2);
  }
  return null;
}

console.log(binarySearch(arr, num1)); // 5
console.log(binarySearch(arr, num2)); // 13
console.log(binarySearch(arr, num3)); // null
