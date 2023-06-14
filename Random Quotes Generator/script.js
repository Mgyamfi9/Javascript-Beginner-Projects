const button = document.getElementById("button");
const paragraph = document.getElementById("quote");
const url = "https://quotesondesign.com/wp-json/wp/v2/posts/?orderby=rand";

async function getPost() {
  const response = await fetch(url);
  const jsonData = await response.json();
  console.log(jsonData);
}
button.addEventListener("click", () => {
  getPost();
  paragraph.innerText = jsonData;
});
