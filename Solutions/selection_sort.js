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
