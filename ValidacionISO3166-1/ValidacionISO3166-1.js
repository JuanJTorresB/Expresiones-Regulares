/* Validación   */

const re = new RegExp("^([A-Z]{3})$");

/* La expresión regular indica que el string debe tener EXACTAMENTE 3 letras en Mayúsculas*/

let Iso3166 = "COL";

if (re.exec(BIN) != null) { //Busca coincidencias con la expresión regular y de no encontrarlas arroja un valor null
    console.log("ISO 3166-1 Correcto");
} else { //Si no hay coincidencias se imprime un log en consola
    console.log("ISO 3166-1 Incorrecto");
};