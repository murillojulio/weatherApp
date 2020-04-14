import React, {Component} from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import './styleFont.css';
//import { SUN } from '../../constants/weathers';
import transformWeather from '../../services/transformWeather';
import api_weather from '../../constants/api_url';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';

class WeatherLocation extends Component{
    constructor(){
        super();
        this.state = {
            city : 'Palmira',
            data_ : null
        }
        console.log("constructor");
    }  

    componentDidMount(){
        console.log("componentDidMount");
        this.handleUpdateClick();
    }

    componentDidUpdate(prevProps, prevState){
        console.log("componentDidUpdate");
    }
    
    UNSAFE_componentWillMount(){
        console.log("UNSAFE_componentWillMount");
    }

    UNSAFE_componentWillUpdate(){
        console.log("UNSAFE_componentWillUpdate");
    }    

    handleUpdateClick = () => {
        console.log("handleUpdateClick");
        fetch(api_weather).then(resolve => {
           return resolve.json();           
        }).then(dato => {
            this.setState({
                city : 'Palmira - Bolo',
                data_ : transformWeather(dato),
            });           
        });        
    }

    render(){
        console.log("render");
        const { data_, city } = this.state;
        return(
        <div className="weatherLocationCont">
            <Location city={city}></Location>
            { data_ ? <WeatherData data={data_}></WeatherData> : <CircularProgress size={50} /> }
            <Button variant={`outlined`} color={`primary`} onClick={this.handleUpdateClick}>CONSULTAR</Button>
            {/* 
            El problema surge al hace lo siguiente:
            onClick={MiFuncion()} o onClick={MiFuncion(parametro)}
            Esto no es correcto, ya que se invocaría "MiFuncion" con cada renderización. 
            Al utilizar los paréntesis se realiza la "invocación" de la función.
            Por este motivo, una de las formas más fáciles de resolver esa situación
            es generar una nueva función que a su vez llame a esta función (MiFuncion).
            onClick={() => MiFuncion(parametro)}
            Analizando lo que hicimos con la arrow function () => ...
            Sería lo mismo a
            const NuevaFuncion = () => MiFuncion(parametro)
            onClick={NuevaFuncion} // Es igual a la primera opción  */}

        </div>
         
        );
       
    }  
}

//console.log(WeatherLocation);
export default WeatherLocation;