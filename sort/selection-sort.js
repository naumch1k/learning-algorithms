const findSmallestIndex = (arr) => {
  let smallestElement = arr[0];
  let smallestIndex = 0;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < smallestElement) {
      smallestElement = arr[i];
      smallestIndex = i;
    }
  }

  return smallestIndex;
}

const selectionSort = (arr) => {
  const sortingArr = [...arr];
  const sortedArr = [];
  const length = sortingArr.length;


  for (let i = 0; i < length; i++) {
    let smallestIndex = findSmallestIndex(sortingArr);
    sortedArr.push(sortingArr.splice(smallestIndex, 1)[0]);
  }

  return sortedArr;
}

const numbers = [5, 2, 7, 4, 1, 6, 3, 0];

console.log(selectionSort(numbers)); // [0, 1, 2, 3, 4, 5, 6, 7]
console.log(numbers); // [5, 2, 7, 4, 1, 6, 3, 0]


// O(n^2)
// Ω(n^2)
// θ
