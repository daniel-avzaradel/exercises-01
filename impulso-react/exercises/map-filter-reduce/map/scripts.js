function mapSemThis(arr, multiplier) {
  return arr.map((item) => item * multiplier);
}

const nums = [1, 2, 3, 4];

const double = mapSemThis(nums, 2);
const triple = mapSemThis(nums, 3);
console.log(double, triple);
