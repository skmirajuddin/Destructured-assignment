function extractElements(array) {
  const [first, second, ...rest] = array;
  const last = rest.pop();

  return [first, second, last];
}

const array = [1, 2, 3, 4, 5];
const extractedElements = extractElements(array);
console.log(extractedElements);
