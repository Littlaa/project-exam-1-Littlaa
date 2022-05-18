const url = "https://littlaa.one/projectexam1/wp-json/wp/v2/posts?acf_format=standard&per_page=20";

const carousellResults = document.querySelector(".resultsCarousell");

async function getPosts() {
  try {
    const response = await fetch(url);
    const posts = await response.json();
    console.log(posts);

    for (let i = 0; i < posts.length; i++) {
      carousellResults.innerHTML += `${posts[i].title.rendered}
                                    <img src="${posts[i].acf.image}">
                                    `;
    }
  } catch (error) {
    console.log(error);
  }
}

getPosts(url);
