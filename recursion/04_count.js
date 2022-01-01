// counts the number of elements in the array

const count = arr => arr.length == 0 ? 0 : 1 + count(arr.slice(1));

console.log(count([2, 4, 6, 12])); // 4
console.log(count([])); // 0
