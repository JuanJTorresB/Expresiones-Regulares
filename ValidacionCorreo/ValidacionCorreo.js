/* Se necesita validar un correo electrónico para un inicio de sesión */

const re = new RegExp("^[\\w]+@([\\w]+\\.)+[\\w]");

/* La expresión regular indica que el string debe empezar con una palabra compuesta por caracteres alphanumericos
después un arroba (@), seguido del dominio (mas caracteres alphanumericos) y por ultimo la extension que puede ser .com u otras */

let Iso3166 = prompt("Ingrese su Correo Electrónico");

if (re.exec(BIN) != null) { //Busca coincidencias con la expresión regular y de no encontrarlas arroja un valor null
    alert("Bienvenido a Nuestro Sitio Web");
} else { //Si no hay coincidencias se entra en un bucle hasta que el valor ingresado cumpla con la expresión regular
    do {
        BIN = prompt("Ingrese un Correo Electrónico Valido");
    } while ((re.exec(BIN)) == null)
    alert("Bienvenido a Nuestro Sitio Web");
};