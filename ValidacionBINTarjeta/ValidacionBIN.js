/* Se necesita verificar el BIN de una tarjeta de crédito para una transacción */

const re = new RegExp("^([0-9]{4})\\s?([0-9]{4})\\s?([0-9]{4})\\s?([0-9]{4})$");

/*La expresión regular indica que el string debe tener EXACTAMENTE 16 Números los cuales en grupos de 4 pueden ir o no separados por espacios*/

/* let BIN = "3204828077007700"; */ //Sin espacios
let BIN = "3204 8280 7700 7700";

if (re.exec(BIN) != null) { //Busca coincidencias con la expresión regular y de no encontrarlas arroja un valor null
    console.log("BIN Correcto");
} else { //Si no hay coincidencias se imprime un log en consola
    console.log("BIN Incorrecto");
};