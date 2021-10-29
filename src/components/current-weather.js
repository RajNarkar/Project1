import React from "react";

import "./current-weather.css";




class CurrentWeather extends React.Component {
  render() {
    const temperature = this.props.current.temp;
    const pressure = this.props.current.pressure;
    const humidity = this.props.current.humidity;
    const windspeed = this.props.current.wind_speed;
    
    
    

    const description = this.props.current.weather[0].description;
    
    const image = {
      url: `http://openweathermap.org/img/wn/${this.props.current.weather[0].icon}@4x.png`,
      alt: `Image of  ${this.props.current.weather[0].description}`,
    };
    const feelsLike = this.props.current.feels_like;

    
    
    return (
      <div className="current-weather">
        <div className="current-weather__main-content">
          <div>
            <span className="current-weather__temperature">
              {Math.round(temperature)}
              <span className="current-weather__degree">°C</span>
            </span>
            <p className="current-weather__description">{description}</p>
          </div>

          <img width="150" src={image.url} alt={image.alt} />
        </div>

        <div>
          <p className="current-weather__feels-like">Feels like {Math.round(feelsLike)}°C</p>
          <p className="current-weather__feels-like">Pressure = {pressure}hPa</p>
          <p className="current-weather__feels-like">Humidity = {humidity}% </p>    
          <p className="current-weather__feels-like">Wind Speed = {Math.round((windspeed*3.6+ Number.EPSILON) * 100) / 100}Km/Hr </p>    
                 
          
        </div>
      </div>
    );
  }
}

export default CurrentWeather;
