function init() {
  var count = 0;

  return function () {
    count++;
    return count;
  };
}

const jump = init();
const fly = init();

console.log(jump());
console.log(jump());
console.log("==========");
console.log(fly());
console.log(fly());
console.log(!!init); // will be true  --> !! Bolean mikone
