// sums values in the array

const sum = arr => arr.length == 0 ? 0 : arr[0] + sum(arr.slice(1));

console.log(sum([2, 4, 6, 12])); // 24
console.log(sum([])); // 0
