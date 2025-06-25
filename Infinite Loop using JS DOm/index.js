const container = document.getElementById("container");
const loader = document.getElementById("loader");

let limit = 10;

let isLoading = false;
let allPosts = [];
let curr = 0;

async function fetchData() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  allPosts = await res.json();
  showPosts();
}

function showPosts() {
  isLoading = true;
  loader.style.display = "block";


  setTimeout(()=>{
  const nextPosts = allPosts.slice(curr, curr + limit);

  nextPosts.forEach((el) => {
    const div = document.createElement("div");
    div.className = "post";
    div.innerHTML = ` <h2>${el.title}</h2>
            <p> ${el.body}</p>
        `;
    container.appendChild(div);
  });
  curr += limit;
  loader.style.display = "none";
  isLoading = false;


  if(curr >= allPosts.length){
    window.removeEventListener('scroll', handleScroll)
  }

},500)



}

function handleScroll() {
  if (
    window.innerHeight + window.scrollY >= document.body.offsetHeight - 10 &&
    !isLoading
  ) {
    showPosts();
  }
}

window.addEventListener("scroll", handleScroll);

fetchData();
