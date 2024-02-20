//https://dnrbmiiducergeuxsuzz.supabase.co

//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRucmJtaWlkdWNlcmdldXhzdXp6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDczMDg5MzcsImV4cCI6MjAyMjg4NDkzN30.JK7N38zHew_AANCZ0wgtL_9sHiyvpaJr-i2mQO-9rjc
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

fetch("https://dnrbmiiducergeuxsuzz.supabase.co/rest/v1/vildmad?apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRucmJtaWlkdWNlcmdldXhzdXp6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDczMDg5MzcsImV4cCI6MjAyMjg4NDkzN30.JK7N38zHew_AANCZ0wgtL_9sHiyvpaJr-i2mQO-9rjc" + id)
  .then((respone) => respone.json())
  .then((data) => showProduct);

function showProduct(vildmad) {
  console.log(product);

  document.querySelector(".svamp h1").textContent = vildmad.title;
}
