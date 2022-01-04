const arr = [1, 5, 7, 12, 44, 45, 49, 52, 55, 67, 88, 90, 91, 100];

// find numbers
const num1 = 45; // 5
const num2 = 100; // 13
const num3 = 69; // null

/*
P
Input:
- sorted array
- element to search

Output:
- index of the element to search in array
- null if element is not found

Examples:
binarySearch(num1); // 5
binarySearch(num2); // 13
binarySearch(num1); // null

Data Structure:
- n/a

Algorithm:
- binary search

- determine the middle element:
    arrCopy.length / 2, rounded down - save to variable middle

- create variable lower - set to 0
- create variable upper - set to arrCopy.length - 1

while lower <= upper

- if num === arrCopy[middle]
  return middle;

if num < arrCopy[middle]
  upper = middle - 1
else 
  lower = middle + 1
determine middle element  as Math.ceil((lower + upper) / 2), set to middle

return null;
Code:
*/

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