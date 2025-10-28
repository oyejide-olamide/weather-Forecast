import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "./components/SearchBar";
import DisplayPage from "./components/DisplayPage"; 
import './App.css';
import Header from "./components/header";

function App() {
  const [city, setCity] = useState("Lagos");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [units, setUnits] = useState("metric");

  const API_KEY = "f3b34c44739a39a533d6c481a2cba9bd";

  const fetchWeather = async (cityName = city, unitsSystem = units) => {
    if (!cityName.trim()) return;
    
    setLoading(true);
    setError("");
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName.trim()}&appid=${API_KEY}&units=${unitsSystem}`
      );
      setData(response.data);
      console.log("Weather data:", response.data);
    } catch (error) {
      setData(null);
      if (error.response && error.response.status === 404) {
        setError("City not found. Please check the spelling.");
      } else if (error.response && error.response.status === 401) {
        setError("Invalid API key. Please check your API configuration.");
      } else {
        setError("Failed to fetch weather data. Please try again.");
      }
      console.error("Error fetching weather data:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleUnitsChange = (newUnits) => {
    setUnits(newUnits);
    if (data) {
      fetchWeather(city, newUnits);
    }
  };

  useEffect(() => {
    fetchWeather();
  }, []);

  return (
    <div className="App">
      <Header units={units} onUnitsChange={handleUnitsChange} />
      <SearchBar 
        city={city} 
        setCity={setCity} 
        onSearch={fetchWeather}
        loading={loading}
      />
      {error && <div className="error-message">{error}</div>}
      <DisplayPage weatherData={data} loading={loading} units={units}/>
    </div>
  );
}

export default App;