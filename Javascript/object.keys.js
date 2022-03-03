const num = [1, 5, 2, 4, 8];
const obj = { a: 1, b: 2 };

const numKey = Object.keys(num); // ["0", "1", "2", "3", "4"]
const numValue = Object.values(num); // [1, 5, 2, 4, 8]
const objKey = Object.keys(obj); // ["a", "b"]
const objValue = Object.values(obj); // [1, 2]

console.log(numKey);
console.log(numValue);
console.log(objKey);
console.log(objValue);

const object1 = {
  a: "somestring",
  b: 42,
};

for (const [key, value] of Object.entries(object1)) {
  console.log(`${key}: ${value}`);
}

function devide(weight) {
  let w1 = [...Array(weight).keys()];
  // let w1 = Array.from(Array(weight).keys());
  console.log(arrayWeight)
}