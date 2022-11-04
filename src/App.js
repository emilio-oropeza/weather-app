import React, {useState, useEffect} from 'react';
import './App.css';
import SearchBar from './component/SearchBar';
import logo from './assets/weatherFind.png'
import WeatherDetails from './component/WeatherDetails';
import { ErrorRounded } from '@mui/icons-material';

function App() {
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(false);
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      searchWeatherCity();
    }
  }

  const searchWeatherCity = async () => {
    setLoading(true);
    setError(null);
    setWeather(null);
    const response = await fetch(`https://simple-weather2.p.rapidapi.com/weather?location=${city}`, {
      headers: {
        'X-RapidAPI-Key': '',
        'X-RapidAPI-Host': 'simple-weather2.p.rapidapi.com'
      }
    });
    if(response.status == 200){
      const weatherCity = await response.json();
      setWeather(weatherCity);
    } else {
      setError('The city is not available.')
    }
    setLoading(false);
  }

  return (
    <div className="App">
      {loading ? 
        <h1>Loading...</h1>
        :
        <div className='formContainer'>
          <form>
            <SearchBar setCity={(inputCity) => setCity(inputCity)} handleKeyDown={(e) => handleKeyDown(e)}/>
            <button 
              type="button"
              className='formContainer--button'
              onClick={searchWeatherCity}
              disabled={loading}
            >
              Search
            </button>
          </form>
        </div>
      }
      {
        weather ? 
          <WeatherDetails {...weather} />
        : null
      }
      {
        error ?
        <h1>{error}</h1>
        : null
      }
    </div>
  );
}

export default App;
