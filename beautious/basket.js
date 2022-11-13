let basketData = JSON.parse(localStorage.getItem("basket"));
let mainProductdiv = document.querySelector("#displaybasketproducts"); //...Maindiv
let discprice = 0;
let totalprice = 0;
function displayBasketProduct(basketData) {
  mainProductdiv.innerHTML = null;
  let totalitems = 0;
  totalprice = 0;
  let shippingcharge = 5;
  basketData.forEach((element, index) => {
    totalitems = totalitems + Number(element.quantity);
    totalprice = totalprice + Number(element.price * element.quantity);
    let innerdiv = document.createElement("div");
    let imgandProductdiv = document.createElement("div"); //...............innerdiv1
    let pricediv = document.createElement("div"); //.......................innerdiv2
    let producttprice = document.createElement("h4");
    producttprice.innerText = element.price * element.quantity;
    //
    let productdetaildiv = document.createElement("div"); //................divfor Product detals
    let img = document.createElement("img");
    img.src = element.image;
    //
    let brandname = document.createElement("h4");
    brandname.innerText = element.brandname;
    let displayname = document.createElement("h5");
    displayname.innerText = element.displayname;
    //   quantity + & - and remove
    let incDecQunRemove = document.createElement("div"); //inc Dec Qun Remove div
    let decquantity = document.createElement("button");
    decquantity.innerText = "-";
    //   decrement
    decquantity.addEventListener("click", function () {
      decrement(element, index);
    });

    let totalquantity = document.createElement("h5");
    totalquantity.innerText = element.quantity;

    let incquantity = document.createElement("button");
    incquantity.innerText = "+";
    //   increment
    incquantity.addEventListener("click", function () {
      increment(element, index);
    });

    let removebtn = document.createElement("button");
    removebtn.innerText = "remove";
    //   remove
    removebtn.addEventListener("click", function () {
      remove(element, index);
    });
    //append function
    incDecQunRemove.append(decquantity, totalquantity, incquantity, removebtn);
    productdetaildiv.append(brandname, displayname, incDecQunRemove); //..................append productdetails and quantity and remove
    imgandProductdiv.append(img, productdetaildiv); //...................append img & productdetailsdiv
    pricediv.append(producttprice); //...........................................append price
    innerdiv.append(imgandProductdiv, pricediv); //................innerdiv(append imageproductdiv,pricediv)
    mainProductdiv.append(innerdiv);
  });
  // total items
  document.querySelector("#totalitems").innerText =
    "Get it shipped (" + totalitems + ")";
  // total price of all item in basketcheckout
  document.querySelector("#Mertotalprice").innerText =
    Math.round(totalprice * 100) / 100;
  // estimated price/checkout price
  if (totalprice > 50) {
    shippingcharge = 0;
    document.querySelector("#shipping").innerText = "free";
  } else {
    document.querySelector("#shipping").innerText = "$5";
  }
  if (totalprice == 0) {
    document.querySelector("#shippingandtotalprice").innerText = 0;
  } else {
    document.querySelector("#shippingandtotalprice").innerText =
      Math.round((totalprice - discprice + shippingcharge) * 100) / 100;
  }
}
displayBasketProduct(basketData);

// decrement function
function decrement(element, index) {
  element.quantity--;
  if (element.quantity == 0) {
    remove(element, index);
  }
  localStorage.setItem("basket", JSON.stringify(basketData));
  displayBasketProduct(basketData);
}
// increment function
function increment(element, index) {
  element.quantity++;
  localStorage.setItem("basket", JSON.stringify(basketData));
  displayBasketProduct(basketData);
}
// remove function
function remove(element, index) {
  basketData.splice(index, 1);
  localStorage.setItem("basket", JSON.stringify(basketData));
  displayBasketProduct(basketData);
}
// promocode
let promo = document.querySelector("form");
promo.addEventListener("submit", function (event) {
  event.preventDefault();
  if (promo.promocode.value == "masai") {
    document.querySelector("#promoappliedtext").innerText =
      "Promo Code Applied";
    document.querySelector("#dis10").innerText = "-10%";
    discprice = (totalprice / 100) * 10;
    displayBasketProduct(basketData);
  }
});
