// filter dropdown function
document.querySelector("#brandDropDownButton").addEventListener(
  "click",
  function () {
    this.parentNode.parentNode.classList.toggle("open");
  },
  false
);
let url = "https://makeup-api.herokuapp.com/api/v1/products.json";
let displayNumber = 504;
fetchData(url);
async function fetchData(url) {
  console.log(url);
  try {
    let res = await fetch(url);
    let data = await res.json();
    displayData(data);
  } catch (err) {
    console.log(err);
  }
}
let display = document.querySelector("#displayproducts");
function displayData(data) {
  display.innerHTML = null;
  for (let i = displayNumber; i < displayNumber + 30; i++) {
    let div = document.createElement("div");
    let img = document.createElement("img");
    img.src = data[i].image_link;
    let brandname = document.createElement("h4");
    brandname.innerText = data[i].brand;
    let displayname = document.createElement("p");
    displayname.innerText = data[i].name;
    let rating = document.createElement("p");
    rating.innerText = "Rating: " + data[i].rating;
    let price = document.createElement("h4");
    price.innerText = "$ " + data[i].price;
    div.append(img, brandname, displayname, rating, price);
    display.append(div);
    div.addEventListener("click", function () {
      productView(data[i]);
    });
  }
}
//.............................................icon filter functions..........................................................
let organic = document.querySelector("#iconorganic");
organic.addEventListener("click", function () {
  url =
    "https://makeup-api.herokuapp.com/api/v1/products.json?product_tag=organic";
  displayNumber = 535;
  fetchData(url);
});
let clean = document.querySelector("#iconclean");
clean.addEventListener("click", function () {
  url =
    "https://makeup-api.herokuapp.com/api/v1/products.json?Product_tags=Glutenfree";
  displayNumber = 640;
  fetchData(url);
});
let vegan = document.querySelector("#iconvegan");
vegan.addEventListener("click", function () {
  console.log("hi");
  url =
    "https://makeup-api.herokuapp.com/api/v1/products.json?product_tag=vegan";
  displayNumber = 577;
  fetchData(url);
});
let crualityfree = document.querySelector("#iconcrualityfree");
crualityfree.addEventListener("click", function () {
  console.log("hi");
  url =
    "https://makeup-api.herokuapp.com/api/v1/products.json?product_tag=Cruelty free";
  displayNumber = 610;
  fetchData(url);
});
// ...............................................filter by product type........................................................................
let filterblush = document.querySelector("#blush");
filterblush.addEventListener("click", function () {
  url =
    "https://makeup-api.herokuapp.com/api/v1/products.json?product_type=blush";
  displayNumber = 28;
  fetchData(url);
});
let filterbronzer = document.querySelector("#bronzer");
filterbronzer.addEventListener("click", function () {
  url =
    "https://makeup-api.herokuapp.com/api/v1/products.json?product_type=bronzer";
  displayNumber = 28;
  fetchData(url);
});
let filtereyebrow = document.querySelector("#eyebrow");
filtereyebrow.addEventListener("click", function () {
  url =
    "https://makeup-api.herokuapp.com/api/v1/products.json?product_type=eyebrow";
  displayNumber = 1;
  fetchData(url);
});
let filtereyeliner = document.querySelector("#eyeliner");
filtereyeliner.addEventListener("click", function () {
  url =
    "https://makeup-api.herokuapp.com/api/v1/products.json?product_type=eyeliner";
  displayNumber = 4;
  fetchData(url);
});
let filterfoundation = document.querySelector("#foundation");
filterfoundation.addEventListener("click", function () {
  url =
    "https://makeup-api.herokuapp.com/api/v1/products.json?product_type=foundation";
  displayNumber = 95;
  fetchData(url);
});
// ....................................................filter by brand..........................................................................
let filterannabelle = document.querySelector("#annabelle");
filterannabelle.addEventListener("click", function () {
  url = "https://makeup-api.herokuapp.com/api/v1/products.json?brand=annabelle";
  displayNumber = 0;
  fetchData(url);
});
let filtermaybelline = document.querySelector("#maybelline");
filtermaybelline.addEventListener("click", function () {
  url =
    "https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline";
  displayNumber = 0;
  fetchData(url);
});
let filternyx = document.querySelector("#nyx");
filternyx.addEventListener("click", function () {
  url = "https://makeup-api.herokuapp.com/api/v1/products.json?brand=nyx";
  displayNumber = 0;
  fetchData(url);
});
let filterPacifica = document.querySelector("#Pacifica");
filterPacifica.addEventListener("click", function () {
  url = "https://makeup-api.herokuapp.com/api/v1/products.json?brand=Pacifica";
  displayNumber = 0;
  fetchData(url);
});
let filterzorah = document.querySelector("#zorah");
filterzorah.addEventListener("click", function () {
  url = "https://makeup-api.herokuapp.com/api/v1/products.json?brand=zorah";
  displayNumber = 0;
  fetchData(url);
});
// ............................................Product View Function...........................................................................
function productView(clickedData) {
  let obj = {
    image: clickedData.image_link,
    brandname: clickedData.brand,
    displayname: clickedData.name,
    rating: clickedData.rating,
    price: clickedData.price,
    id: clickedData.id,
    description: clickedData.description,
  };

  localStorage.setItem("productView", JSON.stringify(obj));
  window.location.href = "productView.html";
}
