// Welcoming alert
alert(
  "Velkommen til din personlige handleliste! Trykk OK for å gå videre til veiledningen."
);
alert(
  "Du vil få 3 kategorier: 1. Hva du allerede har, 2. Hva du begynner å gå tom for 3. Hva du må handle. Trykk på X for å fjerne vare."
);

//What I already have
var enoughArray = [];
var enoughProductList = document.getElementById("enough-product-list");

showAlreadyProduct();

function showAlreadyProduct() {
  enoughProductList.innerHTML = "";
  for (let i = 0; i < enoughArray.length; i++) {
    enoughProductList.innerHTML += `<li id="already-product">
    <p id="already-name">${enoughArray[i].name} <button id="delete-already" onclick="confirmDeleteAlready(${i})">X</button></p>
        </li>
        `;
  }
}

function addAlreadyProduct() {
  let enoughProductInput = document.getElementById("enough-input").value;
  enoughArray.push({ name: enoughProductInput });
  showAlreadyProduct();
}

//Delete function for "What I already have"
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
    <p id="eventually-name">${eventuallyArray[i].name}<button id="delete-eventually" onclick="confirmDeleteEventually(${i})">X</button>
    </p>
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

//Delete function for "What I eventually must buy"
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
var buyProduct = [];
var buyProductList = document.getElementById("buy-product-list");

showBuyProduct();

function showBuyProduct() {
  var price = 0;
  buyProductList.innerHTML = "";
  for (var i = 0; i < buyProduct.length; i++)
    if (buyProduct.length > 0) {
      buyProductList.innerHTML += `<li id="buy-product">
    <p id="buy-name">
          ${buyProduct[i].name}<button id="delete-buy" onclick="confirmDeleteBuy(${i})">X</button></p>
        </li>
        `;
      price = price + parseInt(buyProduct[i].price);
    }

  document.getElementById("calculatePrice").innerHTML = price;
}

function addBuyProduct() {
  var buyInput = document.getElementById("buy-input");
  var priceInput = document.getElementById("price-input");

  var priceProduct = parseInt(priceInput.value);
  if (!isNaN(priceProduct) && priceProduct > 0) {
    var newProduct = { name: buyInput.value, price: priceInput.value };
    buyProduct.push(newProduct);
    showBuyProduct();
  } else {
    alert("Noe gikk galt! Legg inn et tall.");
  }
}

//Delete function for "Things I must buy"
function confirmDeleteBuy(i) {
  let confirmDeleteBuy = prompt(
    `Ønsker du å slette "${buyProduct[i].name}"? Skriv ja eller nei.`
  );
  if (confirmDeleteBuy == "ja") {
    alert(`${buyProduct[i].name} er nå slettet.`);
    buyProduct.splice(i, 1);
    showBuyProduct()();
  } else {
    alert("Sletting kansellert");
  }
}
