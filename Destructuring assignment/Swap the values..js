function swapValues(x, y) {
    [x, y] = [y, x];
    return [x, y];
  }

let x = 5;
let y = 10;

const swappedValues = swapValues(x, y);
console.log(swappedValues);
