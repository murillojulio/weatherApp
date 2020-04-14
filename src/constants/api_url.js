const location = "Palmira,co";
const api_key = "842f907ab73d0255a411d9e28419db8b";
const url_base_weather = "https://api.openweathermap.org/data/2.5/weather";
const api_weather = `${url_base_weather}?q=${location}&appid=${api_key}`; 
//const api_weather = "http://www.dbpacifico.creando.net/api/territorios/12/";

export default api_weather;