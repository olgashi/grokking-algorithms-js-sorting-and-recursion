/*

P
INPUT: array of numbers
OUTPUT: array of numbers in sorted order
Rules:
if input is an empty array, the output is an empty array

E
[11, 5, 2, 7] => [2, 5, 7, 11]
index
0     2, 5, 11, 7
1     2, 5, 11, 7
2     2, 5, 7, 11



[1, 45, 3, 15, 100] => [1, 3, 15, 45, 100]
[1, 2, 3, 4, 5] => [1, 2, 3, 4, 5]
[] => []
 
D
- n/a

A
- selection sort

outer loop:
  - iterate from 0 to arr.length - outerIndex
    set smallest to the current index
  inner loop:
  - iterate from outerIndex+1 to arr.length - innerIndex
    if arr[innerIndex] < smallest
      smallestIndex = innerIndex
    swap arr[outerIndex] and arr[smallestIndex]
    
return arr

C
*/
function selectionSort(arr) {
  for (let outerIndex = 0; outerIndex < arr.length; outerIndex++) {
    let smallestIndex = outerIndex;

    for (let innerIndex = outerIndex + 1; innerIndex < arr.length; innerIndex++) {
      if (arr[smallestIndex] > arr[innerIndex]) {
        smallestIndex = innerIndex;
      }
    }
    [arr[smallestIndex], arr[outerIndex]] = [arr[outerIndex], arr[smallestIndex]];
  }
  return arr;
}

console.log(selectionSort([1, 45, 3, 15, 100])); // [1, 3, 15, 45, 100]
console.log(selectionSort([1, 2, 3, 4, 5])); // [1, 2, 3, 4, 5]
console.log(selectionSort([])); // []