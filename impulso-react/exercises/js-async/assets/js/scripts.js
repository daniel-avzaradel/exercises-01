const BASE_URL = "https://thatcopy.pw/catapi/rest";
const catImg = document.querySelector("#cat");
const loadBtn = document.querySelector("#change-cat");

const getCats = async () => {
  try {
    const data = await fetch(BASE_URL);
    const res = await data.json();

    return res.webpurl;
  } catch (err) {
    console.log(err);
  }
};

const loadImg = async () => {
  catImg.src = await getCats();
};

loadBtn.addEventListener("click", () => {
  loadImg();
});
