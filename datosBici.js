const fs = require('fs');
function importarBicicletas() {
    const file = fs.readFileSync('./bicicletas.json', 'utf-8');
    return bicicletas = JSON.parse(file);
        
}
//console.log(importarBicicletas());


module.exports = importarBicicletas;