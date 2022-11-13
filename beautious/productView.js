

let productData = JSON.parse(localStorage.getItem("productView"));
function displayProduct() {
  document.querySelector("title").innerText = productData.displayname+" | Beautious";
  document.querySelector(
    "#productviewcontainer"
  ).innerHTML = `<div id="displayimg">
        <img
          src=${productData.image}
          alt=""
        />
      </div>
      <div id="displaydetails">
        <h3>${productData.brandname}</h3>
        <h3 style="font-weight: lighter">${productData.displayname}</h3>
        <h3>Rating: ${productData.rating}</h3>
        <h3>$ ${productData.price}</h3>
        <p><h5>What is it:</h5>${productData.description}</p>
        <div id="tags">
          <div id="NEW"><h6>New</h6></div>
          <div id="LE"><h6>Limited Edition</h6></div>
        </div>
        <div id="quantitybasketbutton">
            <select name="" id="quantity" aria-placeholder="1">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
            </select>
            
            <button id="addtobasketBtn"><h4>Add to Basket</h4><p>for Standard Shipping</p></button>
        </div>
      </div>`;

  let quantity = document.querySelector("#quantity");
  productData.quantity = quantity.value;
  quantity.addEventListener("change", function () {
    productData.quantity = quantity.value;
  });
  let addtobasketBtn = document.querySelector("#addtobasketBtn");
  addtobasketBtn.addEventListener("click", function () {
    addToBasket(productData);
  });
}
displayProduct();
// add to basket function
let basketData = JSON.parse(localStorage.getItem("basket")) || [];
function addToBasket(productData) {
  let checkquantity = 0;
  basketData.forEach((element) => {
    if (element.id == productData.id) {
      checkquantity = 1;
      element.quantity = Number(productData.quantity);
      let temp = basketData;
      basketData = null;
      localStorage.setItem("basket", JSON.stringify(basketData));
      basketData = temp;
      localStorage.setItem("basket", JSON.stringify(basketData));
    }
  });
  if (checkquantity == 0) {
    basketData.push(productData);
    localStorage.setItem("basket", JSON.stringify(basketData));
  }
  alert("Product Added to Basket")
}
//<p><h5>What is it:</h5>${productData.description}</p>