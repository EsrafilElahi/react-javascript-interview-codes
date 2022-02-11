const num = [1, 4, 0, 2, 7, 0, 3, 1, 4, 1, 4, 3, 1, 0];
const names = [
  "esrafil",
  "parsa",
  "atrin",
  "zahra",
  "nasim",
  "nazanin",
  "shaghayegh",
];
const arrObj = [
  { name: "tom", age: 25 },
  { name: "larson", age: 23 },
  { name: "tom", age: 25 },
  { name: "edin", age: 20 },
  { name: "tom", age: 23 },
  { name: "larson", age: 19 },
];

// random rendering
let random = num.sort(() => {
  return Math.random() - 0.5;
});

// repeat number
let repeat = (repeatNum) => {
  return num.reduce((acc, value) => (value === repeatNum ? ++acc : acc), 0);
};

// min, max number
let max = num.reduce((acc, val) => (acc > val ? acc : val));
let min = num.reduce((acc, val) => (acc < val ? acc : val));

// filter name for --> na
let nameFilter = [];

for (let i = 0; i < names.length; i++) {
  let value = names[i];
  if (value.startsWith("na") || value.substring(0, 2) === "na") {
    nameFilter.push(value);
  }
}

// filter name filter --> na
let filterName = names.filter((name) => name.startsWith("na"));

// unique item --> set
let uniqueSet = [...new Set(num)];
let newSet1 = new Set(num);
let newSet2 = [...newSet1];
let newSet3 = Array.from(newSet1);

// unique item --> filter
let uniqueFilter = num.filter(
  (value, index, array) => array.indexOf(value) === index
);
let notUniqueFilter = num.filter(
  (value, index, array) => array.indexOf(value) !== index
);

// unique item --> reduce
let uniqueReduce = num.reduce(
  (acc, val) => (acc.includes(val) ? acc : [...acc, val]),
  []
);

// unique array of obj --> set
let uniqueObj1 = [
  ...new Map(arrObj.map((item) => [item["name"], item])).values(),
];

// groupBy --> age
let aged = [];
let flag = {};

arrObj
  .sort((a, b) => a.age - b.age)
  .map((item) => {
    if (item.age === flag) {
      //     console.log('hast');
    } else {
      aged.push(item);
      flag = item.age;
    }
  });

// groupBy --> name
let named = [];
let flags = {};

for (var i = 0; i < arrObj.length; i++) {
  let name = arrObj[i].name;
  let obj = arrObj[i];

  if (flags[name]) continue;
  else {
    named.push(obj);
    flags[name] = true;
  }
}

console.log(named);
