class UI {
  constructor() {
    this.location = document.getElementById("w-location");
    this.desc = document.getElementById("w-desc");
    this.string = document.getElementById("w-string");
    this.icon = document.getElementById("w-icon");
    this.humidity = document.getElementById("w-humidity");
    this.pressure = document.getElementById("w-pressure");
    this.minmax = document.getElementById("w-minmax");
    this.wind = document.getElementById("w-wind");
    this.details = document.getElementById("w-details");
  }

  paint(weather) {
    this.location.textContent = weather.name + ", " + weather.sys.country;
    this.desc.textContent = weather.weather[0].description.toUpperCase();
    this.string.textContent = `${weather.main.temp} F`;
    this.icon.setAttribute(
      "src",
      `http://openweathermap.org/img/w/${weather.weather[0].icon}.png`
    );
    this.humidity.textContent = `Relative Humidity: ${weather.main.humidity} g/m3`;
    this.pressure.textContent = `Relative Pressure: ${weather.main.pressure} hPa`;
    this.wind.textContent = `Wind speed: ${weather.wind.speed} km/h`;
    this.minmax.textContent = `Temperature min & max: ${weather.main.temp_min} / ${weather.main.temp_max}`;
  }
}
