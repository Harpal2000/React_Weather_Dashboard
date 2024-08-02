/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import Header from './components/Header';
import WeatherDashboard from './components/WeatherDashboard';
import axios from 'axios';
import './App.css';

function App() {
  const [weatherData, setWeatherData] = useState([]);
  const [units, setUnits] = useState('metric');
  const [city, setCity] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCurrentLocationWeather = async () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(async (position) => {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;
          const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
          const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`;

          try {
            const response = await axios.get(url);
            setWeatherData(response.data);
            setLoading(false);
          } catch (error) {
            console.error('Error fetching the weather data:', error);
            setWeatherData(null);
            setLoading(false);
          }
        });
      } else {
        alert("Geolocation is not supported by this browser.");
        setLoading(false);
      }
    };

    fetchCurrentLocationWeather();
  }, [units]);

  const fetchWeatherData = async (city) => {
    const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;

    try {
      const response = await axios.get(url);
      setWeatherData(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching the weather data:', error);
      setWeatherData(null);
      setLoading(false);
    }
  };


  return (
    <div className="bg-[#100E1D] h-[100vh] w-full">
      <Header WeatherData={fetchWeatherData} setCity={setCity} setUnits={setUnits} units={units} />
      <div className="flex-grow flex justify-center items-center p-4">
        {loading ? (
          <p>Loading...</p>
        ) : (
          weatherData && <WeatherDashboard weatherData={weatherData} units={units} />
        )}
      </div>
    </div>
  );
}

export default App;