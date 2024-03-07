export const fetchWeather = (location) => {
    const apiKey = 'a7a02d0496eea31064c6255569af7b36';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;
    
    fetch(url)
      .then(response => response.json())
      .then(data => {
        document.getElementById('locationInfo').textContent = data.name;
        document.getElementById('temperature').textContent = `${Math.round(data.main.temp)}°C`;
        document.getElementById('description').textContent = data.weather[0].description;
      })
      .catch(error => {
        console.error('Error fetching weather data:', error);
      });
  };
  
