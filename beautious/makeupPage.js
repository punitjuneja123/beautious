let url = "https://makeup-api.herokuapp.com/api/v1/products.json";
async function fetchData() {
  try {
    let res = await fetch(url);
    let data = await res.json();
    displayData(data);
  } catch (err) {
    console.log(err);
  }
}
fetchData();
let display = document.querySelector("#displayproducts");
function displayData(data) {
  console.log(data[0]);
  for (let i = 504; i < 535; i++) {
    let div = document.createElement("div");
    let img = document.createElement("img");
    img.src = data[i].image_link;
    let brandname = document.createElement("h5");
    brandname.innerText = data[i].brand;
    let displayname = document.createElement("p");
    displayname.innerText = data[i].name
    let rating = document.createElement("p");
    rating.innerText = "Rating: "+data[i].rating;
    let price = document.createElement("h4");
    price.innerText ="$ "+data[i].price;
    div.append(img, brandname, displayname, rating, price);
    display.append(div);
  }
  // data.forEach(element => {
  //     console.log(element)
  //     let div=document.createElement("div")
  //     let img = document.createElement("img")
  //     img.src = element.heroImage;
  //     let brandname = document.createElement("h5")
  //     brandname.innerText = element.brandName;
  //     let displayname = document.createElement("p");
  //     displayname.innerText = element.displayName;
  //     let rating = document.createElement("p");
  //     rating.innerText = element.rating;
  //     let price = document.createElement("h4");
  //     price.innerText = element.currentSku.listPrice;
  //     div.append(img, brandname, displayname, rating, price);
  //     display.append(div)
  // });
}
