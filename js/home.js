const url = "https://littlaa.one/projectexam1/wp-json/wp/v2/posts?acf_format=standard&per_page=20";

const carouselResults = document.querySelector(".resultsCarousel");
const carouselArrow = document.querySelector(".pageArrow");

let this_page = 0;
let rows = 1;

async function getPosts() {
  try {
    const response = await fetch(url);
    const posts = await response.json();
    const pageCount = Math.ceil(posts.length / rows);

    displayPosts(posts, carouselResults, rows, this_page, pageCount);

    function setupCarousel(wrapper) {
      let leftBtn = carouselButton("<");
      wrapper.appendChild(leftBtn);
      let rightBtn = carouselButton(">");
      wrapper.appendChild(rightBtn);
      leftBtn.addEventListener("click", function () {
        displayPosts(posts, carouselResults, rows, --this_page, pageCount);
      });

      rightBtn.addEventListener("click", function () {
        displayPosts(posts, carouselResults, rows, ++this_page, pageCount);
      });
    }

    function carouselButton(page) {
      let button = document.createElement("button");
      button.innerText = page;

      if (this_page == page) button.classList.add("active");

      return button;
    }

    setupCarousel(carouselArrow, rows);

    return posts;
  } catch (error) {
    console.log(error);
    carouselResults.innerHTML = displayError("Oh no! Something went wrong while getting the posts");
  }
}

function displayPosts(items, wrapper, rows_per_page, page, pageCount) {
  wrapper.innerHTML = "";

  if (page < 0) {
    this_page = pageCount - 1;
  }

  let currentPage = this_page % pageCount;
  let start = rows_per_page * currentPage;
  let end = start + rows_per_page;
  let carouselItems = items.slice(start, end);

  for (let i = 0; i < carouselItems.length; i++) {
    let item = carouselItems[i];

    carouselResults.innerHTML = "";

    carouselResults.innerHTML += `<div class="containerPosts">
                                    <a href="specific.html?postsId=${item.id}">
                                    <div>${item.title.rendered}</div>
                                    <img src="${item.acf.image}" alt="${item.acf.alt}">
                                    <div class="read_more">Read More</div>
                                    </a>
                                    </div>
                                    `;
  }
}

getPosts();
