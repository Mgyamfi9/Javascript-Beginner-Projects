const search = document.getElementById("search");
const button = document.getElementById("button");
const condition = document.querySelector(".weather-icon");
button.addEventListener("click", () => {
  getWeather(search.value);
});
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const apiKey = "2a8126c8f3dc25b1ea6ea19809dbe28c";

async function getWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  const data = await response.json();
  console.log(data);
  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
  document.querySelector(".humid").innerHTML =
    Math.floor(data.main.humidity) + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

  if (data.weather[0].main == "Clouds") {
    condition.src = "./images/images/clouds.png";
  } else if (data.weather[0].main == "Clear") {
    condition.src = "./images/images/clear.png";
  } else if (data.weather[0].main == "Rain") {
    condition.src = "./images/images/clear.png";
  } else if (data.weather[0].main == "Drizzle") {
    condition.src = "./images/images/drizzle.png";
  } else if (data.weather[0].main == "Mist") {
    condition.src = "./images/images/mist.png";
  }
}
