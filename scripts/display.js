//display the pets in list items
function displayPets(){
    // let li = document.createElement("li");
    // //creating the list items ^
    // let text = document.createTextNode("something");
    //creating the text^
    // let petDiv = document.getElementById("pets")
    // let tmp="";
    // petDiv.innerHTML="";
    let tmp="";
    for(let i=0;i<petsalon.pets.length;i++){
        let pet = petsalon.pets[i];
        tmp+=`<li>${pet.name} --- ${pet.age}</li>`
        console.log(tmp);

        // let li = document.createElement("li");
        // let text = document.createTextNode(pet.name);
        // li.appendChild(text);
        // petDiv.appendChild(li);


    }
    document.getElementById("pets").innerHTML=tmp;


    
}

//display the pets in cards
function displayCards(){
    let tmp="";
    for(let i=0;i<petsalon.pets.length;i++){
        let pet = petsalon.pets[i];
        tmp+=`
        <div id="${pet.id}" class="pet">
           <div class="pet-header">
               <h4>${pet.name}</h4>
               <button onclick="deletePet(${pet.id});"> 🗑️ </button>
           </div>
           <label>Age:${pet.age}</label>
           <label>Gender:${pet.gender}</label>
           <label>Breed:${pet.breed}</label>
           <label>Owner:${pet.owner}</label>
           <label>Contact Owner:${pet.contact}</label>
        </div>
        `;
    
    document.getElementById("pets").innerHTML=tmp;
    }
}

//display the pets in table

function displayTable(){
    let tr="";
    for(let i=0;i<petsalon.pets.length;i++){
        let pet = petsalon.pets[i];
        tr+=`
        
        
        <tr id="${pet.id}">
            <td>${pet.name}</td>
            <td>${pet.age}</td>
            <td>${pet.gender}</td>
            <td>${pet.breed}</td>
            <td>${pet.service}</td>
            <td>${pet.owner}</td>
            <td>${pet.contact}</td>
            <td><button onclick="deletePet();">🗑️</button></td>
        </tr>
        </div>`;
    }
    document.getElementById("pets").innerHTML=tr;
}


