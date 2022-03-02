//What I already have
var enoughArray = [];
var enoughProductList = document.getElementById("enough-product-list");

showAlreadyProduct();

function showAlreadyProduct() {
  enoughProductList.innerHTML = "";
  for (let i = 0; i < enoughArray.length; i++) {
    enoughProductList.innerHTML += `<li id="already-product">
    <p id="already-name">
          ${enoughArray[i].name}
        </p>
        <button id="delete-already" onclick="confirmDeleteAlready(${i})">Slett</button>
        </li>
        `;
  }
}

function addAlreadyProduct() {
  let enoughProductInput = document.getElementById("enough-input").value;
  enoughArray.push({ name: enoughProductInput });
  showAlreadyProduct();
}

function confirmDeleteAlready(i) {
  let confirmDeleteAlready = prompt(
    `Ønsker du å slette "${enoughArray[i].name}"? Skriv ja eller nei.`
  );
  if (confirmDeleteAlready == "ja") {
    alert(`${enoughArray[i].name} er nå slettet.`);
    enoughArray.splice(i, 1);
    showAlreadyProduct()();
  } else {
    alert("Sletting kansellert");
  }
}

//What to buy eventually
var eventuallyArray = [];
var eventuallyProductList = document.getElementById("eventually-list");

showEventuallyProduct();

function showEventuallyProduct() {
  eventuallyProductList.innerHTML = "";
  for (let i = 0; i < eventuallyArray.length; i++) {
    eventuallyProductList.innerHTML += `<li id="eventually-product">
    <p id="eventually-name">
          ${eventuallyArray[i].name}
        </p>
        <button id="delete-eventually" onclick="confirmDeleteEventually(${i})">Slett</button>
        </li>
        `;
  }
}

function addEventuallyProduct() {
  let eventuallyProductInput =
    document.getElementById("eventually-input").value;
  eventuallyArray.push({ name: eventuallyProductInput });
  showEventuallyProduct();
}

function confirmDeleteEventually(i) {
  let confirmDeleteEventually = prompt(
    `Ønsker du å slette "${eventuallyArray[i].name}"? Skriv ja eller nei.`
  );
  if (confirmDeleteEventually == "ja") {
    alert(`${eventuallyArray[i].name} er nå slettet.`);
    eventuallyArray.splice(i, 1);
    showEventuallyProduct()();
  } else {
    alert("Sletting kansellert");
  }
}
//

//Must buy
var buyArray = [];
var buyProductList = document.getElementById("buy-product-list");

showBuyProduct();

function showBuyProduct() {
  buyProductList.innerHTML = "";
  for (let i = 0; i < buyArray.length; i++) {
    buyProductList.innerHTML += `<li>${buyArray[i].name} - ${buyArray[i].pris},- <span onclick ="deleteMoreItem(${i})">X</span></li>`;
    showPrice = showPrice + parseInt(buyArray[i].price);
  }
  document.getElementById("calculate").innerHTML = showPrice;
}

function addMoreProduct() {
  var moreInput = document.getElementById("more-input");
  var priceInput = document.getElementById("price-input");

  var price = parseInt(priceInput.value);
  if (!isNaN(price) && price > 0) {
    var newItem = { name: moreInput.value, pris: priceInput.value };
    buyArray.push(newItem);
    showBuyProduct();
  } else {
    alert("ERROR!!!!");
  }
}

function addBuyProduct() {
  let buyProductInput = document.getElementById("buy-input").value;
  var buyArray = [];
  buyArray.push({ name: buyProductInput });
  showBuyProduct();
}

function confirmDeleteBuy(i) {
  let confirmDeleteBuy = prompt(
    `Ønsker du å slette "${buyArray[i].name}"? Skriv ja eller nei.`
  );
  if (confirmDeleteBuy == "ja") {
    alert(`${buyArray[i].name} er nå slettet.`);
    buyArray.splice(i, 1);
    showBuyProduct()();
  } else {
    alert("Sletting kansellert");
  }
}
