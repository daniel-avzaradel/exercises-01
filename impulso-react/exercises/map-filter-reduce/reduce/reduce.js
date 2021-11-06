const arr = [2, 4, 5, 9, 13, 22];

const soma = (arr) => {
  return arr.reduce(function (prev, next) {
    return prev + next;
  });
};

console.log(soma(arr));
