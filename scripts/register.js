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

function pets(name,age,gender,breed,service,ownername,contact){
    this.name=name;
    this.age=age;
    this.gender=gender;
    this.breed=breed;
    this.service=service;
    this.owner=ownername;
    this.contact=contact;

}

let Scooby = new pets("Scooby","2","boxer","male","grooming","Bella","760-555-555");
let Enrique = new pets("Enrique","3","mixed","male","grooming","David","555-555-5555")

console.log(Scooby,Enrique);