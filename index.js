const URL = "https://api.thecatapi.com/v1/images/search";

const fetchCats = async () => {
  const res = await fetch(`${URL}?limit=${getNumberOfCats().length}`);

  const data = await res.json();

  const images = document.getElementsByClassName("imgContainer");

  for (let i = 0; i < images.length; i++) {
    images[i].src = data[i].url;
  }
};

const fetchSingleCat = async () => {
  const res = await fetch(URL);
  const data = await res.json();

  document.getElementById("cats").lastChild.src = data[0].url;
};

const addCat = () => {
  const newCat = document.createElement("img");
  newCat.setAttribute("class", "imgContainer");
  document.getElementById("cats").appendChild(newCat);

  fetchSingleCat();
};

const removeCat = () => {
  document
    .getElementById("cats")
    .removeChild(document.getElementById("cats").lastChild);
};

const getNumberOfCats = () => document.getElementsByClassName("imgContainer");

fetchCats();
