const searchInput = document.querySelector('.search-input');
const locationButton = document.querySelector('.location-button');
const currentWeatherDiv = document.querySelector('.current-weather');
const hourlyWeatherList = document.querySelector('.hourly-weather .weather-list')

const API_KEY = "525a2ab15baf4000b9491654252506";

//weather codes for mapping to custom icons
const weatherCodes = 
{
  clear: [1000],
  clouds: [1003, 1006, 1009],
  mist: [1030, 1135, 1147],
  rain: [1063, 1150, 1153, 1168, 1171, 1180, 1183, 1198, 1201, 1240, 1243, 1276],
  moderate_heavy_rain: [1186, 1189, 1192, 1195, 1243, 1146],
  snow: [1066, 1069, 1072, 1114, 1117, 1204, 1207, 1210, 1213, 1219, 1222, 1225, 1237, 1249, 1252, 1255, 1258, 1261, 1264, 1279, 1282],
  thunder: [1087, 1279, 1282],
  thunder_rain: [1273, 1276],
}
const displayHourlyData = (combinedHourlyData)=>
{
  const currentHour = new Date().setMinutes(0, 0, 0);
  const next24Hour = currentHour +24*60*60*1000;
  const next24HourlyData = combinedHourlyData.filter(item=>{
    const foreCastHour = new Date(item.time).getTime();
    return foreCastHour >= currentHour && foreCastHour <= next24Hour;
  });
    hourlyWeatherList.innerHTML  = next24HourlyData.map(item=>{
    const time = item.time.split(" ")[1];
    const temperature = Math.floor(item.temp_c);
    const weatherIcon = Object.keys(weatherCodes).find((key) => weatherCodes[key].includes(item.condition.code));
    return `
    <li class="weather-item">
      <p class="time">${time}</p>
      <img src="icons/${weatherIcon}.svg" class="weather-icon">
      <p class="temperature"> ${temperature}&deg;</p>
    </li>
    `
  }).join("");
}

const getWeatherDetails= async(API_URL)=>{
  try
  {
    // Fetch weather data from the API
    const response = await fetch(API_URL);
    const data = await response.json();
    // Extract current data :)
    const temperature = data.current.temp_c;
    const description = data.current.condition.text;//.current.condition.code
    const weatherIcon = Object.keys(weatherCodes).find((key)=>weatherCodes[key].includes(data.current.condition.code));

    // Update the current weather display
    currentWeatherDiv.querySelector('.weather-icon').src=`icons/${weatherIcon}.svg`;
    currentWeatherDiv.querySelector('.temperature').innerHTML=`${Math.ceil(temperature)} <span>&deg;C</span>`;
    currentWeatherDiv.querySelector('.description').textContent=description;
    
    const combinedHourlyData = [...data.forecast.forecastday[0].hour, ...data.forecast.forecastday[1].hour];
    displayHourlyData(combinedHourlyData);
    searchInput.value=data.location.name;
  }catch (error)
  {
  }
}
const setUpCityData = (cityName)=>{
  const API_URL = `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${cityName}&days=2`;
  getWeatherDetails(API_URL);
}
searchInput.addEventListener('keyup', (e)=>{
  const cityName = searchInput.value.trim();
  if(e.key=="Enter" && cityName)
  {
    setUpCityData(cityName);
  }
})


locationButton.addEventListener("click",  ()=>{
  navigator.geolocation.getCurrentPosition((position)=>{
    let {latitude:lt, longitude:lg} = position.coords;
    const API_URL = `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${lt},${lg}&days=2`;
    getWeatherDetails(API_URL);
  },()=>{
    alert("Access denied");
  })
});

setUpCityData("new york");