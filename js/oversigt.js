console.log("siden er loaded");

const urlParams = new URLSearchParams(window.location.search);
const season = urlParams.get("season");

const url = `https://dnrbmiiducergeuxsuzz.supabase.co/rest/v1/vildmad`;

fetch(url, {
  method: "GET",
  headers: {
    apikey:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRucmJtaWlkdWNlcmdldXhzdXp6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDczMDg5MzcsImV4cCI6MjAyMjg4NDkzN30.JK7N38zHew_AANCZ0wgtL_9sHiyvpaJr-i2mQO-9rjc",
  },
})
  .then((response) => response.json())
  .then((data) => showProducts(data));
function showProducts(mushrooms) {
  console.log("her kommer mine mushroom: ", mushrooms);
  if (season) {
    mushrooms = mushrooms
      .sort(() => (Math.random() > 0.5 ? 1 : -1))
      .slice(0, Math.random() * 3 + 4);
  }

  mushrooms.forEach(showProduct);
}

function showProduct(mushroom, index) {
  console.log("her kommer en svamp:, ", mushroom);
  const template = document.querySelector("#template1").content;
  const copy = template.cloneNode(true);

  copy.querySelector(".smallProduct h2").textContent = mushroom.title;
  copy.querySelector("img").src = mushroom.images;

  copy
    .querySelector(".svamp_link")
    .setAttribute("href", `svamp.html?id=${mushroom.id}`);

  document.querySelector(".grid_3").appendChild(copy);
}
