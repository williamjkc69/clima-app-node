const lugar = require('./lugar/lugar');
const argv = require('yargs').options({ //PARA NO TENER UN COMANDO Y UDAR SOLO EL -- SE UTILIZA OPTION
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtenr el clima',
        demand: true
    }
}).argv;

lugar.getLugarLatLng(argv.direccion)
    .then(resp => console.log(resp))
    .catch(e => console.log('Error!!', e))