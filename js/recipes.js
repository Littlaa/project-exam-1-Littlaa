const baseUrl = "https://littlaa.one/projectexam1/wp-json/wp/v2/posts?acf_format=standard";
const postsResults = document.querySelector(".postsRecipes");
const loadMore = document.querySelector(".load_more");

async function getBlogPosts(url) {
  try {
    const response = await fetch(url);
    const posts = await response.json();

    postsResults.innerHTML = "";

    postsResults.innerHTML = "";
    for (let i = 0; i < posts.length; i++) {
      postsResults.innerHTML += `<div class="containerPosts">
                                    <a href="specific.html?postsId=${posts[i].id}">
                                    <div>${posts[i].title.rendered}</div>
                                    <img src="${posts[i].acf.image}" alt="${posts[i].acf.alt}">
                                    <div class="read_more">Read More</div>
                                    </a>
                                    </div>
                                    `;
    }
  } catch (error) {
    console.log(error);
    postsResults.innerHTML = displayError("Oh no! Something went wrong while getting the posts");
  }
}

getBlogPosts(baseUrl);

loadMore.onclick = function () {
  const newUrl = baseUrl + "&per_page=20";
  getBlogPosts(newUrl);
};
