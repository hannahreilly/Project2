import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import { fetchData } from './services/books';
// import { imageData } from './services/books';
import Input from './components/input';
// import Img from './components/image';
// import axios from 'axios';
import Footer from './components/footer';
import Header from './components/header';
import Nav from './components/nav';
import Book from './components/Book';
import Popular from './components/popular';
import About from './components/about';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      value: "",
      number: 0,
      bookInfo: [],
      title: "",
      author: "",
      subject: "",
      apiDataLoaded: false
    }
  }

  onDecClick = (e) => {
    e.preventDefault();
    const number = this.state.number - 1;
    if (this.state.number > 0) {
      this.setState({
        number
      })
    }
  }
  onIncClick = (e) => {
    e.preventDefault();
    const number = this.state.number + 1;
    this.setState({
      number
    })
  }

  handleChange = (e) => {
    this.setState({
      value: e.target.value
    })
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const data = await fetchData(this.state.value);
    const books = data.data.docs.filter(book => {
      if (book.title.toLowerCase() === this.state.value.toLowerCase()) {
        return book;
      }
    })


    const selectedBooks = books.splice(0, 12)
    console.log(selectedBooks)
    this.setState(state => ({
      books: [...selectedBooks, ...state.books],
      apiDataLoaded: true
    }))
  }

  renderBooks = () => {
    if (this.state.books.length) {
      return this.state.books.map((book, index) => (
        <div>
          <Book
            key={index}
            book={book}
          />
          <button onClick={this.onIncClick}>
            Add to Cart
      </button>
        </div>
      ))
    }
  }



  

  render() {
    return (
      <div className="App">

        <Header />
        <br></br>
        <span className="cart">Cart {this.state.number} </span>
        <Nav />
        <Route exact path="/" render={(props) =>
          <Input
            onChange={this.handleChange}
            onSubmit={this.handleSubmit}
            renderBooks={this.renderBooks}
          />} />
        <Route exact path="/popular" component={Popular} />
        <Route exact path="/about" component={About} />
        {/* 
        <div id="bookRes">
          {this.renderBooks()}
        </div> */}

        <Footer />
      </div>
    );
  }
}
export default App;