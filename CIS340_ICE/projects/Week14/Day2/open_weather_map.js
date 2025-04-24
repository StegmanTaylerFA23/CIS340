const WEATHER_API_KEY = "bbeb34ebf60ad50f7893e7440a1e2b0b";
const API_STEM = "http://api.openweathermap.org/data/2.5/weather?";

function zipUrl(zip) {
  return `${API_STEM}q=${zip}&units=imperial&APPID=${WEATHER_API_KEY}`;
}

function fetchForecast(zip) {
  // Use fecth() to call the weather API
  return fetch(zipUrl(zip))

  // Convert raw HTTP to json format
  .then(response => response.json())

  // Process the JSON data and extract only relevant information
  .then(responseJSON =>{
    return{
      main: responseJSON.weather[0].main,
      description: responseJSON.weather[0].description,
      temp: responseJSON.main.temp,
      feels_like: responseJSON.main.feels_like,
      temp_min: responseJSON.main.temp_min,
      temp_max: responseJSON.main.temp_max,
      humidity: responseJSON.main.humidity,
      wind_speed: responseJSON.wind.speed,
      wind_deg: responseJSON.wind.deg,
      pressure: responseJSON.main.pressure,
      visibility: responseJSON.main.visibility,
      sunrise: new Date(responseJSON.sys.sunrise * 1000).toLocaleTimeString(),
      sunset: new Date(responseJSON.sys.sunset * 1000).toLocaleTimeString(),
      city: responseJSON.name,
      country: responseJSON.sys.country,
      icon: responseJSON.weather[0].icon
    };
  })

  // catch and log any error
  .catch(error =>{
    console.error(error);
  });
}

//fetch function from class
export default { fetchForecast: fetchForecast };
