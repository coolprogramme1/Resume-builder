function addnewWEfield() {
  // Create a new textarea element
  let node = document.createElement('textarea');
  node.classList.add('form-control');
  node.classList.add('wefield');
  node.setAttribute("rows", 3);
  
  // Get references to the "Work Experience" form group and the "Add" button
  let weob = document.getElementById('we');
  let weAddButtonOb = document.getElementById('weAddButton');
  
  // Insert the new textarea element before the "Add" button
  weob.insertBefore(node, weAddButtonOb);
}

  
function eqfield() {
    let node = document.createElement('textarea');
    node.classList.add('form-control');
    node.classList.add('eqfield');
    node.setAttribute('rows', 3);
    let eqOb = document.getElementById('eq');
    let aqAddButtonOb = document.getElementById('aqAddButton');
    eqOb.insertBefore(node, aqAddButtonOb);
}
//upload image
function uploadImage() {
    var input = document.createElement('input'); // Create an input element
    input.type = 'file'; // Set input type as file
    input.accept = 'image/*'; // Set file accept attribute to only accept image files
    input.onchange = function(event) {
      var reader = new FileReader(); // Create a FileReader object
      reader.onload = function() {
        document.getElementById('myImage').src = reader.result; // Set the src attribute of the image element with the selected file data
      };
      reader.readAsDataURL(event.target.files[0]); // Read the selected file as data URL
    };
    input.click(); // Click on the input element to trigger file selection dialog
  }
  

//generating cv
function generateCV(){
    let namefield=document.getElementById('namefield').value;
    let nameT1=document.getElementById('nameT1');
nameT1.innerHTML=namefield;
document.getElementById('nameT2').innerHTML=namefield;
//now for contact
let contactfield=document.getElementById('contactfield').value;
document.getElementById('contactT').innerHTML=contactfield;
//now for addresss
let addressfield=document.getElementById('addressfield').value;
document.getElementById('addressT').innerHTML=addressfield;
//now for facebook id
let fbfield=document.getElementById('fbfield').value;
document.getElementById('fbT').innerHTML=fbfield;
//now for instagrame
let instafield=document.getElementById('instafield').value;
document.getElementById('instaT').innerHTML=instafield;
//now for linkedin
let linkedfield=document.getElementById('linkedfield').value;
document.getElementById('linkedT').innerHTML=linkedfield;
//now for objective
document.getElementById('objectiveT').innerHTML=document.getElementById('objectivefield').value;
//workplace it is tricky
//do it carefully
let wes=document.getElementsByClassName("wefield");
let str="";
for(let e of wes){
    str = str + `<li>${e.value}</li>`;

}
document.getElementById("weT").innerHTML=str;

// now for your achiv.
let es=document.getElementsByClassName("eqfield");
let srr="";
for(let e of es){
    srr = srr + `<li>${e.value}</li>`;    
}
document.getElementById("aqT").innerHTML=srr;




document.getElementById('cv-form').style.display='none';
document.getElementById('cv-template').style.display='block';
}
function printCV(){
window.print();
}