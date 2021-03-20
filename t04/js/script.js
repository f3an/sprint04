let lat;
let lon;
const contcard = document.getElementById("dayList");

function getOpen(lat, lon) {
  fetch(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly&appid=1b58709d14115e05ce34f4d75a88f43b`
  )
    .then((data) => data.json())
    .then((data) => data.daily)
    .then((weekData) => getDailyData(weekData))
    .catch((err) => console.log(err));
}

const getDailyData = (data) => {
  for (const dayData of data) {
    const date = getDate(dayData.dt);
    const temperature = getTemperature(dayData.temp.day);
    const imageCode = dayData.weather[0].icon;
    const imageUrl = `http://openweathermap.org/img/wn/${imageCode}.png`;
    setDailyData(date, temperature, imageUrl);
  }
};

const getDate = (date) => {
  const NewDate = new Date(date * 1000);
  const month =
    NewDate.getMonth() + 1 < 10
      ? `0${NewDate.getMonth() + 1}`
      : `${NewDate.getMonth() + 1}`;
  const day =
    NewDate.getDate() < 10 ? `0${NewDate.getDate()}` : `${NewDate.getDate()}`;

  day < 10 ? `0${day}` : `${day}`;

  console.log(`${month}.${day}`);
  return `${month}.${day}`;
};

const getTemperature = (temperature) => {
  const newTemperature = (temperature - 273.15).toFixed(0);
  console.log(newTemperature > 0 ? `+${newTemperature}°` : `${newTemperature}°`);
  return newTemperature > 0 ? `+${newTemperature}°` : `${newTemperature}°`;
};

const setDailyData = (date, temperature, imageUrl) => {
  const newDiv = document.createElement("div");
  newDiv.className = "dailyData";
  const dayItem = document.createElement("h4");
  const imageItem = document.createElement("img");
  const temperatureItem = document.createElement("h3");

  dayItem.className = "day";
  dayItem.textContent = date;
  imageItem.className = "image";
  imageItem.src = imageUrl;
  temperatureItem.className = "temperature";
  temperatureItem.textContent = temperature;

  newDiv.appendChild(dayItem);
  newDiv.appendChild(imageItem);
  newDiv.appendChild(temperatureItem);

  dayList.appendChild(newDiv);
};

function getCity(lat, lon) {
  fetch(
    `https://api.opencagedata.com/geocode/v1/json?q=${lat}+${lon}&key=8a519509a1cd415bad8ca3c602c53790`
  )
    .then((data) => data.json())
    .then((data) => data.results)
    .then((data) => {
      getcity = data[0].components.city;
      document.getElementById("city").innerHTML = getcity;
    })
    .catch((err) => console.log(err));
}

navigator.geolocation.getCurrentPosition(
  (pos) => {
    lat = pos.coords.latitude;
    lon = pos.coords.longitude;
    console.log(`lat: ${lat}, lon: ${lon}`);
    getOpen(lat, lon);
    getCity(lat, lon);
  },
  (error) => {
    alert(error.message);
    console.error();
  }
);
