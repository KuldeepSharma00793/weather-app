import React, { useState } from 'react'
import './WeatherApp.css';

import search_icon from "../Assets/search.png";
import clear_icon from "../Assets/clear.png";
import cloud_icon from "../Assets/clouds.png";
import drizzle_icon from "../Assets/drizzle.png";
import rain_icon from "../Assets/rain.png";
import snow_icon from "../Assets/snow.png";
import wind_icon from "../Assets/wind.png";
import humidity_icon from "../Assets/humidity.png";



const WeatherApp = () => {

    const apiKey ="286fd64d3d9c8a01301197a02ef99d0b";
    // const [wicon, setWicon] = useState(cloud_ico n);
    const search = async ()=>{
        const element = document.getElementsByClassName('cityInput');
        if(element[0].value === ""){
            return 0;
        }
        let url = `https://api.openweathermap.org/data/2.5/weather?&units=metric&q=${element[0].value}&appid=${apiKey}`
        let response = await fetch(url);
        let data = await response.json();
        const humidity = document.getElementsByClassName('humidity-percentage');
        const wind = document.getElementsByClassName('wind-rate');
        const temp = document.getElementsByClassName('weather-temp');
        const location = document.getElementsByClassName('weather-location');

        humidity[0].innerHTML = data.main.humidity + "%";
        wind[0].innerHTML = data.wind.speed + "Km/h";
        temp[0].innerHTML = data.main.temp + "&deg;C";
        location[0].innerHTML = data.name;


    }


  return (
    <div>
      <div className="container">
        <div className="top-bar">
            <input type="text" className = "cityInput" placeholder="Search"/>
            <div className="search-icon" onClick={search}>
                <img src={search_icon} alt="" />
            </div>
        </div>
        <div className="weather-image">
            <img src={cloud_icon} alt="" />
        </div>
        <div className="weather-temp"></div>
        <div className="weather-location"></div>
        <div className="data-container">
            <div className="element">
                <img src={humidity_icon} alt="" className="icon" />
                <div className="data">
                    <div className="humidity-percentage"></div>
                    <div className="text">Humidity</div>
                </div>
            </div>
            
            <div className="element">
                <img src={wind_icon} alt="" className="icon" />
                <div className="data">
                    <div className="wind-rate"></div>
                    <div className="text">Wind</div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default WeatherApp
