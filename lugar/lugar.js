const axios = require('axios'); // LIBRERIA AXIOS PARA OBETENER SOLICITUDES API
const clima = require('../clima/clima');

const getLugarLatLng = async(direccion) => {
    let encodeUrl = encodeURI(direccion);
    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeUrl}&key=AIzaSyCzpRWJ1UjMmAcCIeCjg0GjekvW5cAB3gA`)

    if (resp.data.status === 'ZERO_RESULTS') {
        // throw new Error(`No hay resultados para la ciudad ${direccion}`);

    }

    let location = resp.data.results[0]; //OBETENIENDO LA RUTA DEL JSON DEL OBEJETO RESULTS
    let coors = location.geometry.bounds.northeast; //OBETENEIENDO LA RUTA DEL LA LONGITUD Y LATITUD

    let temp = await clima.getClima(coors.lat, coors.lng);

    return `El Clima de ${location.formatted_address} es de ${temp}°C`;

}

module.exports = {
    getLugarLatLng
}