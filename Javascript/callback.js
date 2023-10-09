function download(url, callback) {
  setTimeout(() => {
    console.log(`downloading ${url}`);

    callback(url);
  }, 3000);
}

function process(pic) {
  console.log(`process ${pic}`);
}

let url = "https://javascripttutorial.net/pic.png";

download(url, process);

// first download
// after that process

// callback hamoon async/await ast
// vaghti az callback function estefade mikonim
// yani inke be tartib saf anjam bede , yani oon time ezafi ro sabr kon

// 1- callback function --> problem : callback hell
// 2- promise function --> problem : nested then
// 3- async/await function --> indeal
