import React from "react";
import Asidebar from "./Asidebar.jsx";

function DisplayPage({ weatherData, loading }) {
  
  const getCurrentDate = () => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return new Date().toLocaleDateString(undefined, options);
  };

  const getWeatherIcon = (condition) => {
    const iconMap = {
      '01d': '/images/icon-sunny.webp',
      '01n': '/images/icon-sunny.webp',
      '02d': '/images/icon-partly-cloudy.webp',
      '02n': '/images/icon-partly-cloudy.webp',
      '03d': '/images/icon-overcast.webp',
      '03n': '/images/icon-overcast.webp',
      '04d': '/images/icon-overcast.webp',
      '04n': '/images/icon-overcast.webp',
      '09d': '/images/icon-rain.webp',
      '09n': '/images/icon-rain.webp',
      '10d': '/images/icon-rain.webp',
      '10n': '/images/icon-rain.webp',
      '11d': '/images/icon-storm.webp',
      '11n': '/images/icon-storm.webp',
      '13d': '/images/icon-snow.webp',
      '13n': '/images/icon-snow.webp',
      '50d': '/images/icon-fog.webp',
      '50n': '/images/icon-fog.webp'
    };
    return iconMap[condition] || '/images/icon-sunny.webp';
  };

  if (loading) {
    return <div className="loading">Loading weather data...</div>;
  }

  if (!weatherData) {
    return <div className="no-data">No weather data available. Search for a city!</div>;
  }

  const weatherConditions = [
    {
      id: 1,
      name: "Feels Like",
      value: `${Math.round(weatherData.main.feels_like)}°`
    },
    {
      id: 2,
      name: "Humidity",
      value: `${weatherData.main.humidity}%`
    },
    {
      id: 3,
      name: "Wind",
      value: `${Math.round(weatherData.wind.speed * 3.6)}km/h` // Convert m/s to km/h
    },
    {
      id: 4,
      name: "Pressure",
      value: `${weatherData.main.pressure} hPa`
    }
  ];

  return (
    <div className="main-container">
      <div className="displaypage-container">
        <div className="bg-image">
          <br />
          <div className="bg-image-flex">
            <div>
              <h1 className="h1-text">{weatherData.name}, {weatherData.sys.country}</h1>
              <p className="p-text">{getCurrentDate()}</p>
            </div>
            <div className="bg-image-text">
              <img 
                className="bg-image-icon" 
                src={getWeatherIcon(weatherData.weather[0].icon)} 
                alt={weatherData.weather[0].description} 
              />
              <h3 className="h3-text">
                <i>{Math.round(weatherData.main.temp)}<sup>°</sup></i>
              </h3>
            </div>
          </div>
          <div className="weather-description">
            {weatherData.weather[0].description}
          </div>
        </div>

        <div className="display-div">
          {weatherConditions.map((condition) => (
            <div key={condition.id} className="condition-div">
              <h3>{condition.name}</h3>
              <h1>{condition.value}</h1>
            </div>
          ))}
        </div>
       
      </div>
       <div className="asidebar-container">      
          <Asidebar weatherData={weatherData} />
        </div>
    </div>
  );
}

export default DisplayPage;