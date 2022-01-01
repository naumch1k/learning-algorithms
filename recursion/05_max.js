// finds the largest number
// solution only works for arrays longer than one
const max = arr => {
  if (arr.length === 2) return arr[0] > arr[1] ? arr[0] : arr[1];

  let subMax = max(arr.slice(1));

  return arr[0] > subMax ? arr[0] : subMax;
};

console.log(max([2, 4, 6, 12])); // 12
