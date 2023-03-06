const fs = require("fs");
const colors = require("colors")

const crearArchivo = async (base =1, listar=false) => {
    let salida = "";

    salida += `Tabla del ${base} `
    if (listar) console.log(salida.bgBrightWhite.blue.bold)
    for (var x = 1; x <= 10; x++){
        salida +=`${base} x ${x} = ${base*x} \n`;
        if (listar) console.log(`${base} ${colors.green("x")} ${x} ${colors.red("=")} ${`${base*x}`.brightYellow}`)

    }

    try{
        fs.writeFileSync(`Tabla del ${base}.txt`, salida)
    }
    catch (err){
        return err
    }
    return `Tabla del ${base}.txt`
}

module.exports = {
    crearArchivo
}
