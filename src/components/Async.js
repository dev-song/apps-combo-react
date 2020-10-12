import React from 'react';

const CITIES = [
  'Seoul',
  'Tokyo',
  'Beijing',
  'Toronto'
];

class Async extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      weather: null
    }
  }

  async getWeather(city) {
    const weatherApi = `https://abnormal-weather-api.herokuapp.com/cities/search?city=${city}`;
    this.setState({ isLoading: true });

    try {
      let response = await fetch(weatherApi);
      let weather = await response.json();
      this.setState({
        isLoading: false,
        weather
      });
    } catch (err) {
      console.error(err);
    }
  }

  componentDidMount() {
    this.getWeather(CITIES[0]);
  }

  render() {
    const { isLoading, weather } = this.state;

    return (
      <div className="Async">
        <div className="Async__cities-button">
          {CITIES.map((city, index) => (
            <button
              key={index}
              onClick={() => this.getWeather(city)}
            >
              {city}
            </button>
          ))}
        </div>
        {!isLoading
          ?
          <div className="Async__weather-data">
            <p>City: {weather.city}</p>
            <p>Weather: {weather.current.weather}</p>
            <p>Date: {weather.current.date}</p>
            <figure>
              <img src={weather.image_url} alt={`The city of ${weather.city}`} />
            </figure>
          </div>
          :
          <p>Loading...</p>
        }
      </div>
    );
  }
}

export default Async;
