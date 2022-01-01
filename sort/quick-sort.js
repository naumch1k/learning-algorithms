const quickSort = arr => {
  if (arr.length < 2) return arr;

  let pivot = arr[0];
  let lessThanPivot = arr.slice(1).filter(item => item <= pivot);
  let greaterThanPivot = arr.slice(1).filter(item => item > pivot);

  return [...quickSort(lessThanPivot), pivot, ...quickSort(greaterThanPivot)];
}

console.log(quickSort([20, 10, 40, 25])); // [20, 10, 25, 40]

// O(n log n)
// Ω(n^2)
