function fetchData(success) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (success) {
        resolve("data received");
      } else {
        reject("data not received");
      }
    }, 2000);
  });
}
async function getData() {
  try {
    let data = await fetchData(true);
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
getData();
