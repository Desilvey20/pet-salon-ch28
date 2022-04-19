// let studentfirstname="David";
// let studentlastname="DeSilvey";
// let studentage=29;
// let studentisactive=true;

//array []
//object literal {}
// let student1 = {
//     fistname:"David",
//     lastname:"Desilvey",
//     age:29,
//     isactive:true
// }

// let student2 = {
//     fistname:"David",
//     lastname:"Desilvey",
//     age:29,
//     isactive:true
// }

// let student3 = {
//     fistname:"David",
//     lastname:"Desilvey",
//     age:29,
//     isactive:false,
//     hobbies:["working out", "growing mushrooms"],
//     address:{
//         street:"greencrest",
//         zip:"92045",
//         number:"2343",
//     }
// }

// let students=[
//     {
//         fistname:"David",
//         lastname:"Desilvey",
//         age:29,
//         isactive:true
//     },
//     {
//         fistname:"David",
//         lastname:"Desilvey",
//         age:29,
//         isactive:true
//     },
//     {
//         fistname:"David",
//         lastname:"Desilvey",
//         age:29,
//         isactive:false,
//         hobbies:["working out", "growing mushrooms"],
//         address:{
//             street:"greencrest",
//             zip:"92045",
//             number:"2343",
//         }
//     }
// ];

//object constructor

function students(fname,lname,age,isactive){
    this.firstnem=fname;
    this.lastname=lname;
    this.age=age;
    this.isactive=isactive;
}

let student1=new students("David","Desilvey","29","true");
let student2= new students("David","Desilvey","29","true")


console.log(student1,student2);







//console.log(students[0].fistname)

// function displaystudent(){
//     //travel the array 
//     let tmp="";

//     for(let i=0;i<students.length; i++){
//         tmp +=`<li> ${students[i].fistname}</li>`;
//     console.log(tmp);

//         document.getElementById("students").innerHTML=tmp 
//     }

// }
// displaystudent();

// let p = document.createElement("p");
// console.log(p);
// let text = document.createTextNode("this is a paragraph");
// console.log(text);
// p.appendChild(text);

// let div=document.getElementById("students");
// div.appendChild(p);


// console.log(student1.fistname);
// console.log(student2['lastname']);
// console.log(student3.hobbies[1]);
// console.log(student3.address.zip);
// // or
// console.log(student3["address"]["zip"]);


// let client1 = {
//     fistname:"james",
//     lastname:"mack",
//     subscriptiontype:"monthly",
//     isactive:true,
//     credits:100,
// }


// console.log(client1.fistname);
// console.log(client1.lastname);
// console.log(client1.subscriptiontype);
// console.log(client1.isactive);
// console.log(client1.credits)
