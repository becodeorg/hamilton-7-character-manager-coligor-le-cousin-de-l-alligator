import axios from "axios";
function Searching() {
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
}
async function generate() {
  let response = await axios.get(
    "https://character-database.becode.xyz/characters"
  );
  let arr = response.data;
  console.log(arr);
  arr.forEach((element) => {
    const section = document.getElementById("flex-wrap");
    const div = document.createElement("div");
    div.className =
      "profileCard mx-5 my-7 flex items-center flex-col text-center bg-BgCard p-3 text-whitePolice w-52 h-72 rounded-2xl drop-shadow-xl";
    section.appendChild(div);
    //creating the image
    let img = document.createElement("img");
    let srcImg = "data:image/gif;base64," + element.image;
    img.src = srcImg;
    img.className = "imgProfile rounded-full mb-5 h-28";
    img.alt = element["name"];
    div.appendChild(img);
    //creating the name
    let h2 = document.createElement("h2");
    let title = element["name"];
    h2.className = "h-7";
    h2.innerText = title;
    div.appendChild(h2);
    //creating shortd description
    let p = document.createElement("p");
    p.className = "shortDescription h-20";
    let descriptionMainPage = element["shortDescription"];
    p.innerText = descriptionMainPage;
    div.appendChild(p);
    // creating Button
    let button = document.createElement("button");
    button.id = element.id;
    button.className =
      "bg-white text-black p-1 rounded-lg hover:bg-black hover:text-white m-1";

    button.innerText = "See the Character";
    div.appendChild(button);
  });
}
/*Load console log on the screen
(function () {
  let old = console.log;
  let logger = document.getElementById("log");
  console.log = function () {
    for (let i = 0; i < arguments.length; i++) {
      if (typeof arguments[i] == "object") {
        logger.innerHTML +=
          (JSON && JSON.stringify
            ? JSON.stringify(arguments[i], undefined, 2)
            : arguments[i]) + "<br />";
      } else {
        logger.innerHTML += arguments[i] + "<br />";
      }
    }
  };
})();*/
generate();
