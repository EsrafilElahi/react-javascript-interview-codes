const sum = (a) => {
  return (sum1 = (b) => {
    return (sum2 = (c) => {
      return a + b + c;
    });
  });
};

console.log(sum(2)(1)(3));

const sum1 = sum(1);
const sum2 = sum1(6);
const result = sum2(4);
console.log(result);
