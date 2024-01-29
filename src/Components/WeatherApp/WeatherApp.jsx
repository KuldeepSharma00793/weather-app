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
    const [wicon, setWicon] = useState(cloud_icon);
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
        wind[0].innerHTML = Math.ceil(data.wind.speed) + "Km/h";
        temp[0].innerHTML = Math.floor(data.main.temp) + "&deg;C";
        location[0].innerHTML = data.name;

        if(data.weather[0].icon === "01d" || data.weather[0].icon ==="01n"){
            setWicon(clear_icon);
        }
        else if(data.weather[0].icon === "02d" || data.weather[0].icon ==="02n"){
            setWicon(cloud_icon);
        } else if(data.weather[0].icon === "03d" || data.weather[0].icon ==="03n"){
            setWicon(drizzle_icon);
        } else if(data.weather[0].icon === "04d" || data.weather[0].icon ==="04n"){
            setWicon(drizzle_icon);
        } else if(data.weather[0].icon === "09d" || data.weather[0].icon ==="09n"){
            setWicon(rain_icon);
        } else if(data.weather[0].icon === "10d" || data.weather[0].icon ==="10n"){
            setWicon(rain_icon);
        } else if(data.weather[0].icon === "13d" || data.weather[0].icon ==="13n"){
            setWicon(snow_icon);
        } else {
            setWicon(clear_icon);
        }

    }



    const handleSearchClick = (event)=>{
        if(event.keyCode === 13){
            event.preventDefault();
            search();
        }
    }


  return (
    <div>
      <div className="container">
        <div className="top-bar">
            <input type="text" className = "cityInput" placeholder="Search" onKeyDown={handleSearchClick}/>
            <div className="search-icon" onClick={search}>
                <img src={search_icon} alt="" />
            </div>
        </div>
        <div className="weather-image">
            <img src={wicon} alt="" />
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
