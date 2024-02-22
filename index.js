// @ts-check

import half from './src/half.js';

export default half;

function sumFibonacci(number) {
  if (!Number.isInteger(number) || number <= 0) {
    return 0;
  }
  let a = 0;
  let b = 1;
  let sum = 0;

  for (let i = 0; i < number; i += 1) {
    sum += a;
    const temp = a;
    a = b;
    b = temp + b;
  }

  return sum;
}

// Примеры использования
console.log(sumFibonacci(1)); // 0
console.log(sumFibonacci(2)); // 1
console.log(sumFibonacci(3)); // 2
console.log(sumFibonacci(4)); // 4
console.log(sumFibonacci(5)); // 7
console.log(sumFibonacci(-1)); // 0
console.log(sumFibonacci('abc')); // 0
