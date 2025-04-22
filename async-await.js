function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("fetched data");
    }, 2000);
  });
}
async function getData() {
  console.log("fetching...");
  let data = await fetchData();
  console.log(data);
}

getData();
