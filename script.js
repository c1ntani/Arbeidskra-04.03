// Welcoming alert
alert("Hei og velkommen til din personlige handleliste! SKRIV HVORDAN BRUKES")
alert("tekst")

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
var buyProduct = [{ name: "", price: 0 }];
var buyProductList = document.getElementById("buy-product-list");

showBuyProduct();

function showBuyProduct() {
  var price = 0;
  buyProductList.innerHTML = "";
  for (var i = 0; i < buyProduct.length; i++) {
    if (buyProduct.length > 1){
      buyProductList.innerHTML = `<li id="buy-product">
      <p id="buy-name">
            ${buyProduct[i].name}
          </p>
          <button id="delete-buy" onclick="confirmDeleteBuy(${i})">Slett</button>
          </li>
          `;
      price = price + parseInt(buyProduct[i].price);
    }
  }

  document.getElementById("calculatePrice").innerHTML = price;
}

function addBuyProduct() {
  var buyInput = document.getElementById("buy-input");
  var priceInput = document.getElementById("price-input");

  var priceProduct = parseInt(priceInput.value);
  if(buyInput.value.length !== 0 && priceInput.value > 0){
    var newProduct = { name: buyInput.value, price: priceInput.value };
     buyProduct.push(newProduct);
     showBuyProduct();
  } else {
    alert("Fyll inn alle felt")
  } 
}



//   if (isNaN(priceProduct) &&  priceProduct > 0) {
//     var newProduct = { name: buyInput.value, price: priceInput.value };
//     buyProduct.push(newProduct);
//     showBuyProduct();
//   } else if (priceInput.isNaN && priceProduct == "") {
//     alert("Du må fylle alle felter!");
//   } else {
//     alert("Noe gikk galt! Fyll ut alle felt!")
//   }
// }

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