function fib(n) {
  if (n === 1 || n === 2) {
    return 1;
  }
  if (n === 0) {
    return 0;
  }

  return fib(n-1) + fib(n-2);
}

console.log(fib(5));

// 0 1 1 2 3 5 8