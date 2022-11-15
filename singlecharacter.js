import axios from "axios";
let id=localStorage.getItem("id");
async function character() {
    let object = await axios.get("https://character-database.becode.xyz/characters/" + id);
let singlecharacter = object.data;
let image = document.getElementById("Img__singlecharacter")
let sourceimage = "data:image/gif;base64," + singlecharacter["image"];
image.src=sourceimage;

let titlecharacter= document.getElementById("Title__singlecharacter");
titlecharacter.innerText=singlecharacter ["name"];

let shortcharacter= document.getElementById("short__singlecharacter");
shortcharacter.innerText=singlecharacter ["shortDescription"];

let textcharacter = document.getElementById("Text__singlecharacter");
textcharacter.innerText=singlecharacter ["description"];

}
character()

let deletebtn = document.getElementById("btn__singlecharacter");
deletebtn.onclick= async function deletecharacter() {
await axios.delete("https://character-database.becode.xyz/characters/" + id)
}


