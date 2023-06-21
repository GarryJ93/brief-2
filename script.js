const messagePassword = "Veuillez entrer un mot de passe valide minimum 5 caractères.";
const messageEmail = "Veuillez entrer une adresse email valide.";
const messagePasswordVide = "Veuillez entrer un mot de passe.";
const messageEmailVide = "Veuillez entrer une adresse email.";             

let bouton = document.getElementById('submit');
let email = document.getElementById('email');
let password = document.getElementById('password');
let emailAlert = document.getElementById('emailAlert');
let passwordAlert = document.getElementById('passwordAlert');

bouton.addEventListener('click', identify);
email.addEventListener('input',function(){normalize(email);normalizeAlert(emailAlert);});
password.addEventListener('input',function(){normalize(password);normalizeAlert(passwordAlert);});

function identify(){
  if(email.value==""){
    // email Vide
    emailAlert.innerHTML = messageEmailVide;
    email.style = "outline : 2px solid red;";
  }
  if(password.value==""){
    // Password vide
    passwordAlert.innerHTML = messagePasswordVide;
    password.style = "outline : 2px solid red;";
  }

  if( email.value.length>0 && password.value.length>0 && !testEmail() && !testPassword()){
    // Email et Mot de passe erronés
    emailAlert.innerHTML = messageEmail;
    passwordAlert.innerHTML = messagePassword; 
  }else if(email.value.length>0 && !testEmail()){
    // Email erroné
    emailAlert.innerHTML = messageEmail;
  }else if(password.value.length>0 && !testPassword()){
    // Mot de passe erroné
    passwordAlert.innerHTML = messagePassword;
  }
}
function testEmail(){
  if(!email.value.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,3}$/g)){
    email.style = "outline : 2px solid red;";
    return false;
  }else{
    return true;
  }
}
function testPassword(){
  if(password.value.length<5){
    password.style = "outline : 2px solid red;";
    return false;
  }else{
    return true;
  }
}
function normalize(item){
  item.style = "outline: none;";
}
function normalizeAlert(item){
  item.innerHTML = "";
}