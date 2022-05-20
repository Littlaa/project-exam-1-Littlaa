const url = "https://littlaa.one/projectexam1/wp-json/wp/v2/posts?acf_format=standard&per_page=20";

const carouselResults = document.querySelector(".resultsCarousel");

async function getPosts() {
  try {
    const response = await fetch(url);
    const posts = await response.json();
    console.log(posts);

    for (let i = 0; i < posts.length; i++) {
      carouselResults.innerHTML += `<div>
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

getPosts(url);
