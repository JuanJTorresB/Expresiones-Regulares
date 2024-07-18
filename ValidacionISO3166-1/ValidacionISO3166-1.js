/* Validacion   */

const re = new RegExp("^([A-Z]{3})$");

/* La expresion regular indica que el string debe tener EXACTAMENTE 3 letras en Mayusculas*/

let Iso3166 = "COL";

if (re.exec(Iso3166) != null) { //Busca coincidencias con la expresion regular y de no encontrarlas arroja un valor null
    console.log("ISO 3166-1 Correcto");
} else { //Si no hay concidencias se imprime un log en consola
    console.log("ISO 3166-1 Incorrecto");
};