function getWeather() {
  const city = document.getElementById("city").value;
  const apiKey = "e5acab07c9e9328151877c29c8e8ae2c"; // Replace with your OpenWeatherMap API key
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const result = `
        <h2>${data.name}</h2>
        <p>Temperature: ${data.main.temp}°C</p>
        <p>Weather: ${data.weather[0].description}</p>
      `;
      document.getElementById("result").innerHTML = result;
    })
    .catch(() => {
      document.getElementById("result").innerHTML = "City not found!";
    });
}
