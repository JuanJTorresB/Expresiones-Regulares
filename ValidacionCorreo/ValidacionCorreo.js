/* Validación Correo Electrónico */

const re = new RegExp("^[\\w]+@([\\w]+\\.)+[\\w]");

/* La expresión regular indica que el string debe empezar con una palabra compuesta por caracteres alphanumericos
después un arroba (@), seguido del dominio (mas caracteres alphanumericos) y por ultimo la extension que puede ser .com u otras */

let Iso3166 = prompt("Ingrese su Correo Electrónico");

if (re.exec(Iso3166) != null) { //Busca coincidencias con la expresión regular y de no encontrarlas arroja un valor null
    alert("Bienvenido a Nuestro Sitio Web");
} else { //Si no hay coincidencias se entra en un bucle hasta que el valor ingresado cumpla con la expresión regular
    do {
        Iso3166 = prompt("Ingrese un Correo Electrónico Valido");
    } while ((re.exec(Iso3166)) == null)
    alert("Bienvenido a Nuestro Sitio Web");
};