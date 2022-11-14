import axios from "axios";
let arr = [];
function clearStorage() {
  localStorage.clear();
}
clearStorage();
async function generate() {
  let response = await axios.get(
    "https://character-database.becode.xyz/characters"
  );
  arr = response.data;
  console.log(arr);
  arr.forEach((element) => {
    const section = document.getElementById("flex-wrap");
    const div = document.createElement("div");
    div.id = "divProfile";
    div.className =
      "profileCard mx-5 my-7 flex items-center flex-col text-center bg-BgCard p-3 text-whitePolice w-64 h-96 rounded-2xl drop-shadow-xl";
    section.appendChild(div);
    //creating the image
    let img = document.createElement("img");
    let srcImg = "data:image/gif;base64," + element.image;
    img.src = srcImg;
    img.className = "imgProfile rounded-full mb-6 h-32";
    img.alt = element["name"];
    div.appendChild(img);
    //creating the name
    let h2 = document.createElement("h2");
    let title = element["name"];
    h2.className = "h-7 mb-4 font-bold";
    h2.innerText = title;
    h2.id = "forSearch";
    div.appendChild(h2);
    //creating shortd description
    let p = document.createElement("p");

    p.className = "shortDescription h-20 mb-4";
    let descriptionMainPage = element["shortDescription"];
    p.innerText = descriptionMainPage;
    div.appendChild(p);
    // creating Button
    let a = document.createElement("a");
    a.href = "singlecharacter.html";
    let button = document.createElement("button");
    let idEvent = element.id;
    button.id = element.id;

    button.onclick = function storage() {
      localStorage.setItem("id", idEvent);
    };
    button.className =
      "bg-white text-black p-3 rounded-lg hover:bg-black hover:text-white m-1";

    button.innerText = "See the Character";
    a.appendChild(button);
    div.appendChild(a);
  });
}

generate();

//almost
let searchInput = document.getElementById("myInput");

searchInput.addEventListener("keyup", function (event) {
  let searchQuery = event.target.value.toLowerCase();

  console.log(searchQuery);

  let allNames = document.querySelectorAll("#forSearch");
  console.log(allNames);

  for (let i = 0; i < allNames.length; i++) {
    const currentName = allNames[i].textContent.toLowerCase();

    if (currentName.includes(searchQuery)) {
      console.log(currentName);
      allNames[i].parentNode.style.display = "inline-flex";
    } else {
      allNames[i].parentNode.style.display = "none";
    }
  }
});
