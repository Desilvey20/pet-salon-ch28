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

function pet(name,age,gender,breed,service,ownername,contact){
    this.name=name;
    this.age=age;
    this.gender=gender;
    this.breed=breed;
    this.service=service;
    this.owner=ownername;
    this.contact=contact;

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
let thePet = new pet(inputName.Value,inputAge.Value,inputGender.Value,inputBreed.Value,inputService.Value,inputOwner.Value,inputContact.Value);

console.log(thePet)
    //push the pet into the array
    petsalon.pets.push(thePet);
    //clear the inputs
    displayCards();
    clearinputs();
}

function clearinputs(){
    inputName.Value="";
    inputAge.Value="";
    inputGender.Value="";
    inputBreed.Value="";
    inputService.Value="";
    inputOwner.Value="";
    inputContact.Value="";
}

 let Scooby = new pet("Scooby",2,"boxer","male","grooming","Bella","760-555-555");
let Enrique = new pet("Enrique",3,"mixed","male","grooming","David","555-555-5555");

petsalon.pets.push(Scooby,Enrique);