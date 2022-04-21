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
        tmp=`
        <div class="pet">
        <h4>${pet.name}</h4>
        <label>${pet.age}</label>
        </div>
        `;
    }
    document.getElementById("pets").innerHTML=tmp;
}

//display the pets in table