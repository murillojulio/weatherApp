import React from 'react';
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTemperature from './WeatherTemperature';
import './style.css';
import PropTypes from 'prop-types';

const WeatherData = ({data:{ temperature, weatherState, humidity, wind}}) => (
    <div className="weatherDataCont"> 
        <WeatherTemperature 
            temperature={temperature}
            weatherState={weatherState}
        />
        <WeatherExtraInfo 
            humidity={humidity} 
            wind={wind} 
        />
    </div>
);

/* Para validar que el objeto data venga con una determinada forma */
WeatherData.propTypes = {
    data : PropTypes.shape({
        temperature : PropTypes.number.isRequired,
        weatherState : PropTypes.string.isRequired,
        humidity : PropTypes.number.isRequired,
        wind : PropTypes.string.isRequired,
    })
};


export default WeatherData;