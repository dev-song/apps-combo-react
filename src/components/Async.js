import React from 'react';

import './Async.css';

const CITIES = ['Seoul', 'Tokyo', 'Beijing', 'Toronto'];

class Async extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      selectedCity: null,
      weather: null,
    };
  }

  async getWeather(city) {
    const weatherApi = `https://abnormal-weather-api.herokuapp.com/cities/search?city=${city}`;
    this.setState({ isLoading: true });

    try {
      let response = await fetch(weatherApi);
      let weatherData = await response.json();
      this.setState({
        isLoading: false,
        selectedCity: city,
        weatherData,
      });
    } catch (err) {
      console.error(err);
    }
  }

  componentDidMount() {
    this.getWeather(CITIES[0]);
  }

  render() {
    const { isLoading, selectedCity, weatherData } = this.state;

    return (
      <div className='Async'>
        <div className='Async__cities--container'>
          {CITIES.map((city, index) => (
            <button
              key={index}
              className={`cities__select-button${selectedCity === city ? ' selected' : ''}`}
              onClick={() => this.getWeather(city)}
            >
              {city}
            </button>
          ))}
        </div>
        {!isLoading ? (
          <div className='Async__weather-data'>
            <p className='weather-data__city--label'>
              City:
              <span className='weather-data__city'>{weatherData.city}</span>
            </p>
            <p className='weather-data__weather--label'>
              Weather:
              <span className='weather-data__weather'>{weatherData.current.weather}</span>
            </p>
            <p className='weather-data__date--label'>
              Date:
              <span className='weather-data__date'>{weatherData.current.date.split('T')[0]}</span>
            </p>
            <figure className='weather-data__city-img--container'>
              <img
                src={weatherData.image_url}
                className='weather-data__city-img'
                alt={`The city of ${weatherData.city}`}
              />
            </figure>
          </div>
        ) : (
          <p className='Async__loading-message'>Loading...</p>
        )}
      </div>
    );
  }
}

export default Async;
