import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';

import {
    SUN,
    RAIN,
    SNOW,
    WINDY,
    CLOUD,
    CLOUDY
} from './../../../constants/weathers';

import './style.css';

const icons = {
    [SUN]: "day-sunny",
    [RAIN]: "rain",
    [SNOW]: "snow",
    [WINDY]: "windy",
    [CLOUD]: "cloud",
    [CLOUDY]: "cloudy"
};

const sizeIcon = "4x";

const getWeatherIcon = stateIn => {
    const icon = icons[stateIn];

    if(icon)
        return <WeatherIcons className="wicon" name={icon} size={sizeIcon} />;
    else
        return <WeatherIcons className="wicon" name="day-sunny" size={sizeIcon} />;
}

const WeatherTemperature = ({temperature, weatherState}) => (
    <div className="weatherTemperatureCont">
        {
            getWeatherIcon(weatherState)
        }
        <span className="temperature" >{` ${temperature}`}</span>
        <span className="temperatureType" >{` Cº`}</span>
    </div>
);

WeatherTemperature.propTypes = {
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired
};

export default WeatherTemperature;