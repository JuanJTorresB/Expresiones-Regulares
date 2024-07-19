/* Se necesita verificar la Fecha de Vencimiento de una tarjeta de crédito para una transacción */

const re = new RegExp("^(0[1-9]|1[0-2])/([0-2][0-9]|3[01])$");

/*La expresión regular indica que el string debe tener como primer valor un numero iniciando en 0 y seguido de un numero entre 1-9 o iniciado en 1 y un
numero entre 0-2 esto para los mese y se aplica la misma técnica para los Dias pero hasta 31*/

/* let BIN = "3204828077007700"; */ //Sin espacios
let BIN = "12/01";

if (re.exec(BIN) != null) { //Busca coincidencias con la expresión regular y de no encontrarlas arroja un valor null
    console.log("Fecha Correcta");
} else { //Si no hay coincidencias se imprime un log en consola
    console.log("Fecha Incorrecta");
};