const detailContainer = document.querySelector(".postsDetails");

const queryString = document.location.search;
const parameter = new URLSearchParams(queryString);
const postsId = parameter.get("postsId");

const url = `https://littlaa.one/projectexam1/wp-json/wp/v2/posts/${postsId}?acf_format=standard&per_page=20`;

console.log(url);
