const url = "https://littlaa.one/projectexam1/wp-json/wp/v2/posts?acf_format=standard&per_page=20";

const carouselResults = document.querySelector(".resultsCarousel");
const paginationElement = document.querySelector(".pageNumbers");

let current_page = 0;
let rows = 1;

async function getPosts() {
  try {
    const response = await fetch(url);
    const posts = await response.json();
    const pageCount = Math.ceil(posts.length / rows);

    displayPosts(posts, carouselResults, rows, current_page, pageCount);

    function setupPagination(wrapper) {
      let leftBtn = paginationButton("<");
      wrapper.appendChild(leftBtn);
      let rightBtn = paginationButton(">");
      wrapper.appendChild(rightBtn);
      leftBtn.addEventListener("click", function () {
        displayPosts(posts, carouselResults, rows, --current_page, pageCount);
      });

      rightBtn.addEventListener("click", function () {
        displayPosts(posts, carouselResults, rows, ++current_page, pageCount);
      });
    }

    function paginationButton(page) {
      let button = document.createElement("button");
      button.innerText = page;

      if (current_page == page) button.classList.add("active");

      return button;
    }

    setupPagination(paginationElement, rows);

    return posts;
  } catch (error) {
    console.log(error);
  }
}

getPosts();

function displayPosts(items, wrapper, rows_per_page, page, pageCount) {
  wrapper.innerHTML = "";

  if (page < 0) {
    current_page = pageCount - 1;
  }

  let currentPage = current_page % pageCount;
  let start = rows_per_page * currentPage;
  let end = start + rows_per_page;
  let paginatedItems = items.slice(start, end);

  for (let i = 0; i < paginatedItems.length; i++) {
    let item = paginatedItems[i];
    carouselResults.innerHTML += `<div class="containerPosts">
                                    <a href="specific.html?postsId=${item.id}">
                                    <div>${item.title.rendered}</div>
                                    <img src="${item.acf.image}">
                                    <div class="read_more">Read More</div>
                                    </a>
                                    </div>
                                    `;
  }
}
