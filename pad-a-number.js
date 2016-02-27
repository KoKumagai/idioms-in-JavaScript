function pad(num, size, padString) {
  padString = padString || '0';
  num = num + '';

  if(num.length >= size){
    return num;
  }

  return new Array(size - num.length + 1).join(padString) + num;
}

console.log(pad(5, 3));      // 005
console.log(pad(5, 2));      // 05
console.log(pad(100, 2));    // 100
console.log(pad(5, 3, '~')); // ~~5
