function filterEven(arr) {
  return arr.filter(function (item) {
    if (item % 2 === 0) {
      return item;
    }
  });
}

const nums = [1, 2, 5, 7, 8, 29, 21, 32];

console.log(filterEven(nums));
