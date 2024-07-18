/* Validacion Correo Electronico */

const re = new RegExp("^[\\w]+@([\\w]+\\.)+[\\w]");

/* La expresion regular indica que el string debe empezar con una palabra conpuesta por caracteres alphanumericos
despues un arroba (@), seguido del dominio (mas caracteres alphanumericos) y por ultimo la extension que puede ser .com u otras */

let Iso3166 = prompt("Ingrese su Correo Electronico");

if (re.exec(Iso3166) != null) { //Busca coincidencias con la expresion regular y de no encontrarlas arroja un valor null
    alert("Bienvenido a Nuestro Sitio Web");
} else { //Si no hay concidencias se entra en un bucle hasta que el valor ingresado cumpla con la expresion regular
    do {
        Iso3166 = prompt("Ingrese un Correo Electronico Valido");
    } while ((re.exec(Iso3166)) == null)
    alert("Bienvenido a Nuestro Sitio Web");
};