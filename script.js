const URL = "https://iskarr.github.io/austindonovan.github.io/api/business.json";
const container = document.querySelector(".container");

let resultsArray = [];

async function fetchAPI() {
  try {
    const response = await fetch(URL);
    resultsArray = await response.json();
    console.log(resultsArray.business[0]);
    createDOMNodes();
  } catch (error) {
    // Catch Error here
  }
}
fetchAPI();

function createDOMNodes() {
  console.log(resultsArray.business);
  resultsArray.business.forEach((result) => {
    const card = document.createElement("div");
    card.classList.add("card");
    // Image
    const image = document.createElement("img");
    image.src = result.imageurl;
    image.alt = "Business Picture";
    image.loading = "lazy";
    image.classList.add("images");
    // Card Body
    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
    // Card Title
    const cardTitle = document.createElement("h5");
    cardTitle.classList.add("card-title");
    cardTitle.textContent = result.name;
    const cardAddress = document.createElement("h4");
    cardAddress.classList.add("card-address");
    cardAddress.textContent = result.address;
    // Card Text
    const cardText = document.createElement("p");
    cardText.classList.add("card-text");
    cardText.textContent = result.description;
    // Append
    cardBody.append(cardTitle, cardAddress, cardText);
    card.append(image, cardBody);
    container.appendChild(card);
  });
}
