function removeDuplicates(array) {
    return [...new Set(array)];
  }

const numbers = [1, 2, 3, 4, 4, 5, 2, 6, 7, 7];

const uniqueNumbers = removeDuplicates(numbers);
console.log(uniqueNumbers);
