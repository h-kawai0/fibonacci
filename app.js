"use strict";
function fib(n) {
  if (n === 0) {
      console.log(n +'番目の0です');
    return 0;
  } else if (n === 1) {
      console.log(n + '番目の1です');
    return 1;
  }
  return fib(n -1) + fib(n - 2);
}
const length = 5;
for (let i = 0; i <= length; i++) {
    console.log(fib(i));
}


