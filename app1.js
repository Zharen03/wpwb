const {crearArchivo} = require("./modulos/Multiplicar");
const var1 = require("yargs")
    .option("b", {alias: "base", type:"number", default: 1})
    .option("l", {alias: "listar", type: "boolean", default:false})
    .argv
console.clear();

const base = var1.base
const listar = var1.listar

/*console.log(var1)
console.log(var1.base)*/

crearArchivo(base, listar)
    .then(nombreArchivo => console.log(nombreArchivo, "creado"))
    .catch(err => console.log(err))
