import axios from "axios";

let id = localStorage.getItem("id");

async function generateCharacter() {
  let object = await axios.get(
    "https://character-database.becode.xyz/characters/" + id
  );

  let character = object.data;

  let divImage = document.getElementById("myimage");
  let img = document.createElement("img");
  let srcImg = "data:image/gif;base64," + character["image"];
  img.src = srcImg;
  console.log(srcImg);
  img.className = "imgProfile rounded-full mb-6 h-32";
  img.alt = character["name"];
  divImage.appendChild(img);
  //let divImage = document.getElementById("myimage");
  let inputName = document.getElementById("name");
  inputName.value = character["name"];
  let shortDescription = document.getElementById("short-description");
  shortDescription.value = character["shortDescription"];
  let description = document.getElementById("description");
  description.value = character["description"];
}
generateCharacter();

const btnSave = document.getElementById("save");
const btnDelete = document.getElementById("delete");
const form = document.getElementById("form");
const imgInput = document.getElementById("input-img");
const imgArea = document.getElementById("myimage");
const selectImg = document.getElementById("select-img");

btnSave.addEventListener("click", () => {
  const getImage = document
    .getElementById("getImage")
    .src.replace("data:", "")
    .replace(/^.+,/, "");
  const name = document.getElementById("name").value;
  const shortDescription = document.getElementById("short-description").value;
  const description = document.getElementById("description").value;

  sendRequest(name, shortDescription, description, getImage);

  location.reload();
});

async function sendRequest(name, shortDescription, description, getImage) {
  try {
    const response = await axios.post(
      "https://character-database.becode.xyz/characters",
      {
        name: name,
        shortDescription: shortDescription,
        description: description,
        image: getImage,
      }
    );
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

selectImg.addEventListener("click", () => {
  imgInput.click();
});

imgArea.addEventListener("click", () => {
  imgInput.click();
});

imgInput.addEventListener("change", (e) => {
  let image = e.target.files[0];
  let reader = new FileReader();
  reader.onload = (fileLoadedEvent) => {
    let imgUrl = fileLoadedEvent.target.result;
    let img = document.createElement("img");
    img.src = imgUrl;
    imgArea.appendChild(img);
    imgArea.classList.remove("hidden");
    imgArea.classList.add("block");
    imgArea.firstChild.setAttribute("id", "getImage");
    img.classList = "h-36 w-36 rounded-full border-2";
    if (imgArea.children.length == 2) {
      imgArea.removeChild(imgArea.firstChild);
    }
  };

  reader.readAsDataURL(image);
});
