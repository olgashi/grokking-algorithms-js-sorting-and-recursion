function maxNumber(arr) {
  if (arr.length === 2) {
    return greater(arr[0], arr[1]);
  }
  // [1, 45, 100, 12, 150, 106]

  let subMax = maxNumber(arr.slice(1));

  if (subMax > arr[0]) {
    return subMax;
  } else {
    return arr[0];
  }
}

function greater(num1, num2) {
  if (num1 > num2) {
    return num1;
  }

  return num2;
}

console.log(maxNumber([1, 45, 100, 12, 150, 106]))


/*

[1, 45, 100]  [12, 150, 106]

[1, 45] [100] [12, 150] [106]

[1] [45] [100] [12] [150] [106]
*/