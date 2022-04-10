// with callback function

// console.log("start");

// function loginUser(email, callback) {
//   setTimeout(() => {
//     console.log("timeOut in loginUser");
//     callback({ userEmail: email });
//   }, 2000);
// }

// function userVideos(email, callback) {
//   setTimeout(() => {
//     console.log(`timeOut in userVideos : ${email}`);
//     callback(["v1", "v2", "v3"]);
//   }, 2000);
// }

// function videoDetails(callback) {
//   setTimeout(() => {
//     console.log(`video details`);
//     callback("video title");
//   }, 2000);
// }

// const user = loginUser("essinho1121@gmail.com", (info) => {
//   console.log(info);
//   userVideos(info.userEmail, (videos) => {
//     console.log(videos);
//     videoDetails((title) => {
//       console.log(title);
//     });
//   });
// });

// console.log("end");

// with promise

console.log("start");

function loginUser(email) {
  return new Promise((resolve, reject) => {
    console.log("timeOut in loginUser");
    setTimeout(() => {
      resolve({ userEmail: email });
    }, 2000);
  });
}

function userVideos(email) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`timeOut in userVideos : ${email}`);
      resolve(["v1", "v2", "v3"]);
    }, 2000);
  });
}

function videoDetails() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`video details`);
      resolve("video title");
    }, 2000);
  });
}

console.log("end");

// loginUser("esrafil.elahi@gmail.com")
//   .then((user) => userVideos(user.userEmail))
//   .then(() => videoDetails());

// with async await

async function displayUser() {
  const logged = await loginUser("await@email.com");
  const videos = await userVideos(logged.userEmail);
  const details = await videoDetails();
  console.log(details);
}

displayUser();
