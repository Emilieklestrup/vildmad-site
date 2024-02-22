console.log("siden er loaded");

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

const url = `https://dnrbmiiducergeuxsuzz.supabase.co/rest/v1/vildmad?id=eq.${id}`;
console.log("lort");
fetch(url, {
  method: "GET",
  headers: {
    apikey:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRucmJtaWlkdWNlcmdldXhzdXp6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDczMDg5MzcsImV4cCI6MjAyMjg4NDkzN30.JK7N38zHew_AANCZ0wgtL_9sHiyvpaJr-i2mQO-9rjc",
  },
})
  .then((response) => response.json())
  .then((data) => showProduct(data));

function showProduct(data) {
  console.log(data);
  mushroom = data[0];
  document.querySelector("h1").textContent = mushroom.title;
  document.querySelector("p").textContent = mushroom.decription;
  document.querySelector(".grid1 img").src = mushroom.images;
}
