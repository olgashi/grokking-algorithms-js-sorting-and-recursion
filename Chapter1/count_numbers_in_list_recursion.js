function countNums(arr) {
  if (arr.length === 1) {
    return 1;
  }

  return 1 + countNums(arr.slice(1));
}

console.log(countNums([1, 4, 5, 6, 7]))