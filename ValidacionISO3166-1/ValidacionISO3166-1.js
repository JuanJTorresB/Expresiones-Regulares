/* Validacion Correo Electronico */

const re = new RegExp("^([A-Z]{3})$");

/* La expresion regular indica que el string debe tener EXACTAMENTE 3 letras en Mayusculas*/

let Iso3166 = "COL";

if (re.exec(Iso3166) != null) { //Busca coincidencias con la expresion regular y de no encontrarlas arroja un valor null
    console.log("ISO 3166-1 Correcto");
} else { //Si no hay concidencias se entra en un bucle hasta que el valor ingresado cumpla con la expresion regular
    console.log("ISO 3166-1 Incorrecto");
};