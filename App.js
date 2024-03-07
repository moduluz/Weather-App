import React from 'react';
import './App.css';
import { fetchWeather } from './script'; // Assuming script.js is in the same directory

function App() {
  const handleSearch = () => {
    const location = document.getElementById('locationInput').value;
    if (location) {
      fetchWeather(location);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter'){
      handleSearch();
    }
  };

  return (
    <div className="App">
      <div className="container">
        <h1>Weather APP</h1>
        <input type="text" id="locationInput" placeholder="Enter City"
        onKeyPress={handleKeyPress} />
        <button id="searchButton" onClick={handleSearch}>Search</button>
        <div className="weather-info">
          <h2 id="locationInfo"></h2>
          <p id="temperature"></p>
          <p id="description"></p>
        </div>
      </div>
    </div>
  );
}

export default App;
