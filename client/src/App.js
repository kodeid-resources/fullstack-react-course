import React, { Component } from 'react';

import AddCity from './components/AddCity.js';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newCity: '',
      cities: [],
      weather: null
    };
  }
  getCities = () => {
    fetch(`/api/cities`)
      .then((res) => res.json())
      .then((data) => {
        const cities = data.cities.map((r) => r.city_name);
        this.setState({
          cities
        });
      });
  };
  addCity = (city) => {
    fetch(`/api/cities`, {
      method: 'post',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({ city })
    })
      .then((res) => res.json())
      .then((data) => {
        this.getCities();
        this.setState({
          newCity: ''
        });
      });
  };
  componentDidMount() {
    this.getCities();
  }
  handleInputChange = (e) => {
    this.setState({
      newCity: e.target.value
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.addCity(this.state.newCity);
  };
  render() {
    return (
      <div className="container text-center mx-auto my-20 text-grey-darkest">
        <h1 className="my-3 text-grey-darker">My Awesome Weather Dashboard</h1>
        <p>The current weather for your favorite cities!</p>
        <AddCity
          handleSubmit={this.handleSubmit}
          handleInputChange={this.handleInputChange}
          newCity={this.state.newCity}
        />
      </div>
    );
  }
}

export default App;
