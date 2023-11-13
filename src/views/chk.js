const numbers3 = [1, 2, 3, 4, 5];
const sum = numbers3.reduce(function(acc, num) {
  return acc + num;
}, 0);

console.log(sum); // Outputs: 15