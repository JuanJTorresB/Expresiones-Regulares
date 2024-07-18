

const re = new RegExp("^([0-9]{10})$");

/* La expresion regular indica que el string debe tener EXACTAMENTE 10 Numeros*/

let Iso3166 = "3204828077";

if (re.exec(Iso3166) != null) { //Busca coincidencias con la expresion regular y de no encontrarlas arroja un valor null
    console.log("Telefono Correcto");
} else { //Si no hay concidencias se imprime un log en consola
    console.log("Telefono Incorrecto");
};