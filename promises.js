const myPromises = new Promise((resolve, reject) => {
  setTimeout(() => {
    let user = true;
    if (user) {
      resolve("User is resolved");
    } else {
      reject("User is rejected");
    }
  }, 2000);
});
myPromises
  .then((message) => console.log(message))
  .then((error) => console.log(error));
