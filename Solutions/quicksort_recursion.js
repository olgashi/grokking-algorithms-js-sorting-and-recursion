function quickSort(arr) {
  if (arr.length < 2) {
    return arr;
  } else {
    let less = [];
    let greater = [];
    let pivot = arr[0];

    for (let index = 1; index < arr.length; index ++) {
      if (arr[index] < pivot) {
        less.push(arr[index]);
      } else {
        greater.push(arr[index]);
      }
    }
    return quickSort(less).concat([pivot], quickSort(greater));
  }
}

console.log(quickSort([5, 3, 1, 7, 2000, 3232, 3424, 4234, 2, 43, 4, 3453, 2, 543, 9, 7, 0]));