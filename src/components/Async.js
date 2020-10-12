import React from 'react';

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

    try {
      let response = await fetch(weatherApi);
      let weather = await response.json();
      this.setState({ weather });
    } catch (err) {
      console.error(err);
    }
  }

  componentDidMount() {
    this.getWeather('seoul');
  }

  render() {
    return (
      <div className="Async">
      </div>
    );
  }
}

export default Async;
