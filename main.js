import "./CSS/style.css";

let search = document.getElementById("myInput");
let filter = search.value.toUpperCase();
let section = document.getElementById("flex-wrap");
let div = section.getElementsByTagName("div");
for (i = 0; i < div.length; i++) {
  let a = div[i].getElementsByTagName("a")[0];
  txtValue = a.textContent || a.innerText;
  if (txtValue.toUpperCase().indexOf(filter) > -1) {
    div[i].style.display = "";
  } else {
    div[i].style.display = "none";
  }
}
async fetch
