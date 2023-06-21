let bouton = document.getElementById('boutonSubmit');
alert("js ok");
console.log('test js ok');
bouton.addEventListener('click', function()  {
    alert("Clické");
    console.log('test');
})prevent.default();
document.getElementById("submit").addEventListener("click", Identify());
document.getElementById("email").addEventListener("change", Normalize());
document.getElementById("password").addEventListener("change", Normalize());

function Identify() {
  let email = document.getElementById("email");
  let password = document.getElementById("password");
  if (email.value == "" && password.value == "") {
    alert("Veuillez saisir votre email et votre mot de passe.");
    email.style = "outline: 2px solid red;";
    password.style = "outline: 2px solid red;";
    return false;
  }
  if (email.value == "") {
    alert("Merci de saisir votre e-mail");
    email.style = "outline: 2px solid red;";
    return false;
  } else if (
    !email.value.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2}$/g) &&
    password.value == ""
  ) {
    alert("Veuillez saisir un email valide et votre mot de passe");
    email.style = "outline: 2px solid red;";
    password.style = "outline: 2px solid red;";
    return false;
  } else if (!email.value.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2}$/g)) {
    alert("Merci de saisir un e-mail valide");
    email.style = "outline: 2px solid red;";
    return false;
  } else if (password.value == "") {
    alert("Merci de saisir votre mot de passe");
    password.style = "outline: 2px solid red;";
    return false;
  } else {
    alert("Identification réussie");
    return true;
  }
}

function Normalize() {
  let email = document.getElementById("email");
  let password = document.getElementById("password");
  if (email.value != "" && password.value != "") {
    email.style = "outline: none;";
    password.style = "outline: none;";
  } else if (email.value != "") {
    email.style = "outline: none;";
  } else if (password.value != "") {
    password.style = "outline: none;";
  }
  return true;
}
