import React, { Component } from 'react';
import './App.css';
//API Calls
import { fetchData } from './services/books';
//Custom components
import Input from './components/input';
import Nav from './components/nav';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
     bookData: {},
      value: '',
      apiDataLoaded: false
    }
  }
  handleChange = (e) => {
    this.setState({
      value: e.target.value
    })
  }
  handleSubmit = async (e) => {
    e.preventDefault();
    const data = await fetchData(this.state.value);
    this.setState({
      bookData: data.data,
      apiDataLoaded: true
    })
  }
  render() {
    return (
      <div className="App">
        <Input
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
        />
        {this.state.apiDataLoaded &&
          <Nav
            data={this.state.bookData}
          />
        }
      </div>
    );
  }
}
export default App;
