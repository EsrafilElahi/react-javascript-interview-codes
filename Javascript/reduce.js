// reduce
const number = [2, 4, 7, 2, 5, 8, 5, 6, 4, 2, 4, 7, 2, 8, 4, 2, 5];

const repeat = (num) => {
  return number.reduce((acc, val) => (val === num ? ++acc : acc), 0);
};

const max = (arr) => {
  return arr.reduce((acc, val) => acc > val ? acc : val)
}


console.log("repeat :", repeat(4));
console.log("max :", max(number));
