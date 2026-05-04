// Step 1: Local data (VERY IMPORTANT)
let weatherData = {
  pune: { temp: 30, humidity: 70, condition: "Sunny" },
  mumbai: { temp: 32, humidity: 80, condition: "Humid" },
  delhi: { temp: 35, humidity: 60, condition: "Hot" },
};

// Step 2: Function
function getWeather() {
  let city = document.getElementById("city").value.toLowerCase();

  let xhr = new XMLHttpRequest();

  xhr.open("GET", "", true);

  xhr.onload = function () {
    let data = weatherData[city];

    if (data) {
      document.getElementById("result").innerHTML =
        "Temp: " +
        data.temp +
        "°C | Humidity: " +
        data.humidity +
        "% | Condition: " +
        data.condition;
    } else {
      document.getElementById("result").innerHTML = "City not found";
    }
  };

  xhr.send();
}
