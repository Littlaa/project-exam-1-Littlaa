const url = "https://littlaa.one/projectexam1/wp-json/wp/v2/posts?acf_format=standard";
const postsResults = document.querySelector(".postsRecipes");
const loadMore = document.querySelector(".load_more");

async function getBlogPosts() {
  try {
    const response = await fetch(url);
    const posts = await response.json();

    for (let i = 0; i < posts.length; i++) {
      postsResults.innerHTML += `<div class="containerPosts">
                                    <a href="specific.html?postsId=${posts[i].id}">
                                    <div>${posts[i].title.rendered}</div>
                                    <img src="${posts[i].acf.image}">
                                    </a>
                                    </div>
                                    `;
    }
  } catch (error) {
    console.log(error);
  }
}

getBlogPosts(url);

loadMore.onclick = function () {
  const newUrl = url + "&per_page=3";
  getBlogPosts(newUrl);
  console.log(newUrl);
};

// const URL = "https://littlaa.one/projectexam1/wp-json/wp/v2/posts?acf_format=standard";

// loadMore.onclick = function (url) {
//   const newUrl = URL + "&per_page=20";
//   getBlogPosts(newUrl);
//   console.log(newUrl);
// };
