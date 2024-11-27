const importarBicicletas = require('./datosBici');

const dhBici = {
    bicicletas: importarBicicletas(),

    buscarBici: function (id) {
        let resultado = this.bicicletas.filter(bici => bici.id === id);
        return resultado.length > 0 ? resultado[0] : null;
    },

    venderBici: function (id) {
        const bici = this.buscarBici(id);
        if (bici) {
            bici.vendida = true;
            return bici;
        } else {
            return "Bicicleta no disponible";
        }
    },

    biciParaLaVenta: function () {
        let disponible = this.bicicletas.filter(bici => !bici.vendida);
        return disponible;
    },

    totalDeVentas() {
        return this.bicicletas.filter(bici => bici.vendida)
            .reduce((suma, bici) => suma + bici.precio, 0);
    }
}

//console.log(bicicletas);
//console.log(dhBici.buscarBici(6));
//console.log(dhBici.venderBici(6));
//console.log(dhBici.biciParaLaVenta());
//console.log(dhBici.totalDeVentas());
