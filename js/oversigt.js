console.log("siden er loaded");

// const urlParams = new URLSearchParams(window.location.search);
// const id = urlParams.get("id");

const url = `https://dnrbmiiducergeuxsuzz.supabase.co/rest/v1/vildmad`;

fetch(url, {
  method: "GET",
  headers: {
    apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRucmJtaWlkdWNlcmdldXhzdXp6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDczMDg5MzcsImV4cCI6MjAyMjg4NDkzN30.JK7N38zHew_AANCZ0wgtL_9sHiyvpaJr-i2mQO-9rjc",
  },
})
  .then((response) => response.json())
  .then((data) => showProducts(data));
function showProducts(mushroom) {
  console.log("her kommer mine mushroom: ", mushroom);
  mushroom.forEach(showProduct);
}

function showProduct(mushroom) {
  console.log("her kommer en svamp:, ", mushroom);
  const template = document.querySelector("#template1").content;
  const copy = template.cloneNode(true);

  copy.querySelector(".smallProduct h2").textContent = mushroom.title;
  copy.querySelector("img").src = mushroom.images;

  if ((mushroom.season0 = null)) {
    document.querySelector(".overview").style.display = "none";
  }

  document.querySelector(".grid_3").appendChild(copy);
}
