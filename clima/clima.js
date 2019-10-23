const axios = require('axios');
const getClima = async(lat, lng) => {

    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=c040f74c242be423075881da1c3c2d1a`);
    if (resp.data.cod === 400) {}
    return resp.data.main.temp;
}

module.exports = {
    getClima
}