class Weather {
  constructor(city, country) {
    this.apiKey = "2558acde2c8285c08fde8f288adb70a1";
    this.city = city;
    this.country = country;
  }

  async getWeather() {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}}&APPID=${this.apiKey}`
    );
    const responseData = await response.json();
    return responseData;
  }

  changeLocation(city, country) {
    this.city = city;
    this.country = country;
  }
}
