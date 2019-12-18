import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import { fetchData } from './services/books';
import Input from './components/input';
import Img from './components/image';
// import axios from 'axios';
import Footer from './components/footer';
import Header from './components/header';
import Nav from './components/nav';
import Book from './components/Book';
import Popular from './components/popular';


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


    const selectedBooks = books.splice(0, 6)
    console.log(selectedBooks)
    this.setState(state => ({
      books: [...selectedBooks, ...state.books],
      apiDataLoaded: true
    }))
  }

  renderBooks = () => {
    if (this.state.books.length) {
      return this.state.books.map((book, index) => (
    
        <Book
          key={index}
          book={book}
        />
  
        
      ))
    }
  }

  render() {
    return (
      <div className="App">
        <Header/>
          <span className="cart">Cart {this.state.number} </span>
        <Nav />
        <Route exact path ="/" />
        <Route path="/popular" component={Popular} />
        <Input
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
        />
        <Img />

        <div id="bookRes">
          {this.renderBooks()}
          <button onClick={this.onIncClick}>
            Add to Cart
          </button>
        </div>
        
        <Footer />
      </div>
    );
  }
}
export default App;