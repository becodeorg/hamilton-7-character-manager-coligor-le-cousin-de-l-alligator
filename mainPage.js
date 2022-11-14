import axios from "axios";
/*function Searching() {
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
}*/

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
    let button = document.createElement("button");
    button.id = element.id;
    button.className =
      "bg-white text-black p-3 rounded-lg hover:bg-black hover:text-white m-1";

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

/*let searchInput = document.getElementsById("myInput");

searchInput.addEventListener("keyup", function (event) {
  let searchQuery = event.target.value.toLowerCase();
  // console.log(event.target.value)
  // console.log(username.value)
  console.log(searchQuery);

  let allNamesDOMCollection = document.getElementsById("forSearch"); // can also use getElementByTagName('li')
  // console.log(allNamesDOMCollection

  for (let i = 0; i < allNamesDOMCollection.length; i++) {
    const currentName = allNamesDOMCollection[i].textContent.toLowerCase();
    // console.log(searchQuery.length)

    //searchQuery == currentName.substring(0,searchQuery.length)
    // 'k' == karl.substring(0,1) (k)
    // this method only search from start
    if (currentName.includes(searchQuery)) {
      console.log(currentName);
      allNamesDOMCollection[i].style.display = "block";
    } else {
      // document.getElementById('result name').style.display = 'none'
      allNamesDOMCollection[i].style.display = "none";
    }
  }
});*/
const charactersList = document.getElementById("flex-wrap");
const searchBar = document.getElementById("myInput");
let hpCharacters = [];

searchBar.addEventListener("keyup", (e) => {
  const searchString = e.target.value.toLowerCase();

  const filteredCharacters = hpCharacters.filter((character) => {
    return (
      character.name.toLowerCase().includes(searchString) ||
      character.house.toLowerCase().includes(searchString)
    );
  });
  displayCharacters(filteredCharacters);
});

/*const loadCharacters = async () => {
    try {
        const res = await fetch('https://hp-api.herokuapp.com/api/characters%27);
        hpCharacters = await res.json();
        displayCharacters(hpCharacters);
    } catch (err) {
        console.error(err);
    }
};

const displayCharacters = (characters) => {
    const htmlString = characters
        .map((character) => {
            return 
            <li class="character">
                <h2>${character.name}</h2>
                <p>House: ${character.house}</p>
                <img src="${character.image}"></img>
            </li>
        ;
        })
        .join('');
    charactersList.innerHTML = htmlString;
};
*/
loadCharacters();
