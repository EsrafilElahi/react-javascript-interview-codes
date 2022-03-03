// Call Stack = 'run codes here'

// Browser API = 'all async function gos here such as setTimeOut, setInterval, Promis, asyncAwait'

// MicroTask Queue = 'setTimeOut , setInterval'

// MacroTask Queue = 'Promis, asyncAwait'

// ==========================

setTimeout(() => {
  console.log("time out 2000ms");
}, 2000);

setTimeout(() => {
  console.log("time out 0ms");
}, 0);

Promise.resolve("promis").then((res) => console.log(res));

let test = 1;
let stop = 3;
console.log("start busy-async");
while (test < stop) {
  console.log("in the while");
  test++;
}
console.log("end busy-async");
