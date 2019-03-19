import React, { Component } from 'react';

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
        <form className="px-8 pt-6 pb-8 mb-4" onSubmit={this.handleSubmit}>
          <input
            placeholder="Add your favorite city"
            type="text"
            className="shadow border rounded w-3/5 py-2 px-3 text-grey-dark leading-tight"
            onChange={this.handleInputChange}
            value={this.state.newCity}
          />
          <button
            type="submit"
            className="w-1/5 bg-teal hover:bg-teal-dark text-white font-bold py-2 px-3 mx-2 rounded"
          >
            Add City
          </button>
        </form>
      </div>
    );
  }
}

export default App;
