const detailContainer = document.querySelector(".postsDetails");

const queryString = document.location.search;
const parameter = new URLSearchParams(queryString);
const postsId = parameter.get("postsId");

const url = `https://littlaa.one/projectexam1/wp-json/wp/v2/posts/${postsId}?acf_format=standard&per_page=20`;

async function callDetails() {
  try {
    const response = await fetch(url);
    const details = await response.json();

    detailContainer.innerHTML += `<div class="content">
                                  <h1>${details.title.rendered}</h1>
                                  <img src="${details.acf.image}" alt="${details.acf.alt}" id="modalClick">
                                  </div> 
                                  <div class="details">
                                  ${details.acf.description}
                                  </div>
                                  `;

    const modal = document.getElementById("simpleModal");
    const clickModal = document.getElementById("modalClick");
    const closeBtn = document.getElementsByClassName("close_btn")[0];

    clickModal.addEventListener("click", openModal);
    closeBtn.addEventListener("click", closeModal);
    window.addEventListener("click", outsideClick);

    function openModal() {
      modal.style.display = "grid";
      modal.innerHTML = `<img src="${details.acf.image}" alt="${details.acf.alt}" class="modal_content"></img>`;
    }

    function closeModal() {
      modal.style.display = "none";
    }

    function outsideClick(e) {
      if (e.target == modal) {
        modal.style.display = "none";
      }
    }
  } catch (error) {
    console.log(error);
  }
}

callDetails(url);
