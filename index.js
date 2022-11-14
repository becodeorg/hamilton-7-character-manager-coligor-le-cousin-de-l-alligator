import axios from 'axios'

/*Query Selector*/
const btnSave = document.getElementById('save');
const btnDelete = document.getElementById('delete');
const cross = document.getElementById('cross');
const form = document.getElementById('form');
const img = document.getElementById('input-img');

btnSave.addEventListener('click', () => {

    const imgFile = new FormData.append(document.getElementById('input-img'));
    const name = document.getElementById('name').value;
    const shortDescription = document.getElementById('short-description').value;
    const description = document.getElementById('description').value;
  
    const character = { 
        name: name,
        shortDescription: shortDescription,
        description: description,
        image:imgFile
        
    }

    axios.post('https://character-database.becode.xyz/characters', character)
    .then((res) => console.log(res))
    .catch((err) => console.log(err))
    
})

cross.addEventListener('click', () => {
    window.location.href='./mainPage.html'
})






  



