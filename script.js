let titulo = document.querySelector("h2")
console.log(titulo)

titulo.style.color = "blue"
titulo.style.fontSize = "2.5rem"

//Primeira interação do usuário
// Digitado nome de usuário inválido
let loginUsuario = document.getElementById("login-usuario")
let errorTextUsuario = document.querySelector(".error-text")
console.log(errorTextUsuario)

loginUsuario.classList.add("error")
errorTextUsuario.classList.add("visible")