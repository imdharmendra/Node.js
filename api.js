async function fetchPost() {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts");
    let post = response.json();
    console.log(post);
  } catch (error) {
    console.log(error);
  }
}
fetchPost;
