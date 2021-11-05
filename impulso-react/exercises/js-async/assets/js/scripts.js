const BASE_URL = "https://thatcopy.pw/catapi/rest";
const img = document.querySelector("#cat");

const getCats = async () => {
  try {
    const data = await fetch(BASE_URL);
    const res = await data.json();
    img.src = res.webpurl;
    return res.webpurl;
  } catch (err) {
    console.log(err);
  }
};
