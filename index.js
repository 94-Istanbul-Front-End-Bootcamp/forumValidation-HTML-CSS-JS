const userName = document.querySelector("#userName")
const userPassword = document.querySelector("#userPassword")
const userEmail = document.querySelector("#userEmail")
const sendButton = document.querySelector("#sendButton")
const checkbox = document.querySelector("#checkbox")
var spanError = document.getElementsByTagName("span");

function check(){
    if(userName.value == ""){
        spanError[0].innerHTML = "Lütfen Bu Alanı Doldurun"
    }
    if(userPassword.value == ""){
        spanError[1].innerHTML = "Lütfen Bu Alanı Doldurun"
    }
    else if(userPassword.value.length < 8){
        spanError[1].innerHTML = "şifreniz en az 8 karakterden oluşmalıdır"
    }
    if(userEmail.value == ""){
        spanError[2].innerHTML = "Lütfen Bu Alanı Doldurun"
    }
    if(checkbox.checked == false){
        spanError[3].innerHTML = "Lütfen Bu Alanı Doldurun"
    }
}
userName.addEventListener('change', ()=>{
    if(userName.value != ""){
        spanError[0].innerHTML = "";
    }
  })

userPassword.addEventListener('change', ()=>{
    if(userPassword.value.length < 8 ){
        spanError[1].innerHTML = "şifreniz en az 8 karakterden oluşmalıdır";
    }
    else if (userPassword.value.length >= 8 ){
        spanError[1].innerHTML = "";
    }
  })

userEmail.addEventListener('change', ()=>{
    if(!(userEmail.value.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/))){
        spanError[2].innerHTML = "geçersiz email girdiniz";
    }
    else {
        spanError[2].innerHTML = "";
    }
  })

  checkbox.addEventListener('submit', ()=>{
    if (checkbox.checked) {
        checkbox.innerHTML = "";
    }
  })

  sendButton.addEventListener("click", check);