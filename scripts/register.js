let petsalon = {
    name:"The Fashion Pet",
    address:{
        street:"ave university",
        number:"787",
        zip:"23456"
    },
    hours:{
        open:"9:00 a.m.",
        close:"8:00 p.m."
    },
    pets:[
        // {
        //     name:"Scooby",
        //     age:2,
        //     breed:"boxer",
        //     gender:"male",
        //     service:"grooming",
        //     ownersname:"Bella",
        //     contact: "760-555-5555",

        // },
        // {
        //     name:"Enrique",
        //     age:3,
        //     breed:"mixed",
        //     gender:"male",
        //     service:"grooming",
        //     ownersname:"David",
        //     contact:"555-555-5555",

        // },
        // {
        //     name:"Lady",
        //     age:1,
        //     breed:"pitbull",
        //     gender:"female",
        //     service:"grooming",
        //     ownersname:"jack",
        //     contact:"619-303-3030",

        // }
    ]
}

console.log(petsalon);

let c=0

function pet(name,age,gender,breed,service,ownername,contact){
    this.name=name;
    this.age=age;
    this.gender=gender;
    this.breed=breed;
    this.service=service;
    this.owner=ownername;
    this.contact=contact;
    this.id=c++;//increase the var 1 everytime that is used

}
//get the info from the inputs and store the information
let inputName=document.getElementById("txtName");
let inputAge=document.getElementById("txtAge");
let inputGender=document.getElementById("txtGender");
let inputBreed=document.getElementById("txtBreed");
let inputService=document.getElementById("txtService");
let inputOwner=document.getElementById("txtOwner");
let inputContact=document.getElementById("txtContact");

function isValid(aPet){
    let valid=true;
    if(aPet.name.length==0){
        valid=false
        console.error("Invalid name")
    }
    if(aPet.service.length==0){
        valid=false;
        console.error("Invalid name")
    }
    if(aPet.phone.length){
        valid=false;
        console.error("Invalid name")
    }

    return valid;
}

function register(){
    //create the pet
let thePet = new pet(inputName.value,inputAge.value,inputGender.value,inputBreed.value,inputService.value,inputOwner.value,inputContact.value);

console.log(thePet)
    //push the pet into the array
    petsalon.pets.push(thePet);
    //clear the inputs
    displayTable();
    clearinputs();
}

function clearinputs(){
    inputName.value="";
    inputAge.value="";
    inputGender.value="";
    inputBreed.value="";
    inputService.value="";
    inputOwner.value="";
    inputContact.value="";
}

function deletePet(petId){
    console.log("Deleting" + petId);
    let deleteIndex;
    //previous actions
       //we need an id in the pet constructor
       //we need a delete button in the html
    // in this function
       // travel the array (for loop)
       for(let i=0;i<petsalon.pets.length;i++){
           let pet = petsalon.pets[i];
           if(petId==pet.id){
               deleteIndex=i;
               console.log("I found it in position:" + i)

           }

       }
       // find the id (if)
       // get the position in the array(store in a var)
       // remove from the array (splice())
       petsalon.pets.splice(deleteIndex,1);
       // remove from the html (remove())
       document.getElementById(petId).remove();
       //display to the user a message
    //

}

function searchPet(){
    let searchString = document.getElementById("txtSearch").value;
    console.log("Searching " + searchString);

for(let i=0;i<petsalon.pets.length;i++){
    let pet = petsalon.pets[i];
    if(searchString.toLowerCase() === pet.name.toLowerCase()){
        //alert("I found it");
        document.getElementById(pet.id).classList.add("highlight");
    }else{
        document.getElementById(pet.id).classList.remove("highlight");
    }
}
    // in this function
       //travel the array (for loop)
       //find the id (if)
       //highlight the result
}


 let Scooby = new pet("Scooby",2,"boxer","male","grooming","Bella","760-555-555");
let Enrique = new pet("Enrique",3,"mixed","male","grooming","David","555-555-5555");
let Lady = new pet("Lady",11,"pomaranian","female","nails cut","Jessica","985-555-5555")

petsalon.pets.push(Scooby,Enrique,Lady);
displayTable();