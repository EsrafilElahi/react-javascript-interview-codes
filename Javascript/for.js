// for in  --> return index
const number = [2, 6, 4, 8, 1];
for (const index in number) {
  console.log(number[index]);
}

const obj = {
  name: "abraham",
  age: 25,
  country: "england",
};
for (const key in obj) {
  console.log(key); // key
  console.log(obj[key]); //value
}

// for of  --> return item
const num = [0, 7, 4, 9, 2];
for (const item of numb) {
  console.log(item);
}
