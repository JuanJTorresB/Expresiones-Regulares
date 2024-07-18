/* Validacion Correo Electronico */

const re = new RegExp("^[\\w]+@([\\w]+\\.)+[\\w]");

/* La expresion regular indica que el string debe empezar con una palabra conpuesta por caracteres alphanumericos
despues un arroba (@), seguido del dominio (mas caracteres alphanumericos) y por ultimo la extension que puede ser .com u otras */

let userEmail = prompt("Ingrese su Correo Electronico")

if (re.exec(userEmail) != null) { //Busca coincidencias con la expresion regular y de no encontrarlas arroja un valor null
    alert("Bienvenido a Nuestro Sitio Web")
} else { //Si no hay concidencias se entra en un bucle hasta que el valor ingresado cumpla con la expresion regular
    do {
        userEmail = prompt("Ingrese un Correo Electronico Valido")
    } while ((re.exec(userEmail)) == null)
    alert("Bienvenido a Nuestro Sitio Web")
}