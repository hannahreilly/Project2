import React, { Component } from 'react';
import './App.css';
import { fetchData } from './services/books';
import Input from './components/input';
import Image from './components/image';


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
          <Image
            data={this.state.bookData}
          />
        }
      </div>
    );
  }
}
export default App;