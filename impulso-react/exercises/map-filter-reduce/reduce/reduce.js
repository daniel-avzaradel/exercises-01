const arr = [2, 4, 5, 9, 13, 22];

const soma = (arr) => {
  return arr.reduce(function (prev, next) {
    return prev + next;
  });
};

console.log(soma(arr));

function reduceFromBalance(arr, balance) {
  let finalPrice = arr.reduce((prev, next) => {
    return prev + next;
  });

  return balance - finalPrice;
}

console.log(reduceFromBalance([23, 45, 19, 9, 12], 250));
