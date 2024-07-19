

const re = new RegExp("^([0-9]{10})$");

/* La expresión regular indica que el string debe tener EXACTAMENTE 10 Números*/

let Iso3166 = "3204828077";

if (re.exec(Iso3166) != null) { //Busca coincidencias con la expresión regular y de no encontrarlas arroja un valor null
    console.log("Teléfono Correcto");
} else { //Si no hay coincidencias se imprime un log en consola
    console.log("Teléfono Incorrecto");
};