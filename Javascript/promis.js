// promise

const handlePromis = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("hello");
    reject("error");
  }, [1000]);
});

handlePromis
  .then((res) => {
    console.log("res resolve :", res);
  })
  .then(() => {
    console.log("res badesh : goodbye");
  })
  .catch(() => {
    console.log("err");
  });

// another promise example

const p = Promise.resolve("hello");

p.then((val) => {
  console.log(val);
  return `${val} world`;
}).then((newVal) => {
  console.log(newVal);
});
