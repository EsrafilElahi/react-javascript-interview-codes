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

const res = Promise.resolve("hello");

res
  .then((val) => {
    console.log(val);
    return `${val} world`;
  })
  .then((newVal) => {
    console.log(newVal);
  });

const rej = Promise.reject("hello");

rej
  .catch((val) => {
    console.log(val);
    return Promise.reject(`${val} world`);
  })
  .catch((newVal) => {
    console.log(newVal);
  });

// another promise example

const prom = new Promise((resolve, reject) => {
  if (true) {
    reject(new Error("rejected!"));
  } else {
    resolve("resolved!");
  }
});

prom
  .then((val) => {
    return Promise.resolve(`${val} we did it!`);
  })
  .then((val) => {
    console.log(`got ${val}`);
  })
  .catch((err) => {
    console.log(`err msg : ${err.message}`);
  });
