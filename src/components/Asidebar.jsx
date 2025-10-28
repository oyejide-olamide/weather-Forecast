import React from "react";

function Asidebar({ weatherData }) {
  // Sample hourly data for demonstration
  const hourlyData = [
    {
      id: 1, 
      time: "9 AM",
      temp: weatherData ? `${Math.round(weatherData.main.temp - 2)}°` : "18°",
      icon: "/images/icon-partly-cloudy.webp"
    },
    {
      id: 2,
      time: "12 PM",
      temp: weatherData ? `${Math.round(weatherData.main.temp)}°` : "20°",
      icon: "/images/icon-sunny.webp"
    },
    {
      id: 3, 
      time: "3 PM",
      temp: weatherData ? `${Math.round(weatherData.main.temp + 2)}°` : "22°",
      icon: "/images/icon-sunny.webp"
    },
    {
      id: 4,
      time: "6 PM",
      temp: weatherData ? `${Math.round(weatherData.main.temp)}°` : "20°",
      icon: "/images/icon-partly-cloudy.webp"
    }
  ];

  return (
    <div className="asidebar-bg">
      <div className="asidebar-div">
        <div className="aside-input">
          <h2 className="aside-h2">Hourly Forecast</h2>
        </div>

        {hourlyData.map((hour) => (
          <div key={hour.id} className="aside-condition">
            <div className="aside-time">
              <img className="aside-img" src={hour.icon} alt="Weather icon" />
              <h3>{hour.time}</h3>
            </div>
            <h1>{hour.temp}</h1>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Asidebar;