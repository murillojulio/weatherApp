import { WINDY } from '../constants/weathers';
import convert from 'convert-units';


const getTemp = kelvin => {
    return Number(convert(kelvin).from("K").to("C").toFixed(1));       
}

const getWeatherState = weather_data => {
    return WINDY;
}

const transformWeather = weather_data => {// weather_data es el json 
    // humidity y temp vienen el objeto main
    const { humidity, temp } = weather_data.main;
    // speed viene en el objeto wind
    const { speed } = weather_data.wind;
    const temperature = getTemp(temp);
    const weatherState = getWeatherState(weather_data);
    const data = {
        humidity,// esto es igual a humidity: humidity porque es igual el json a la constante ES6
        temperature,
        wind: `${speed} m/s`,
        weatherState,
    }
    return data;
}

export default transformWeather;