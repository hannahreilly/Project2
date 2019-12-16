import React, { Component } from 'react';
import './App.css';
// import { Route } from 'react-router-dom';
import { fetchData } from './services/books';
import Input from './components/input';
import Image from './components/image';
import axios from 'axios';
import Footer from './components/footer';
import Header from './components/header';
import Nav from './components/nav';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: ["example"],
      value: '',
      bookInfo: [],
      title: "",
      author: "",
      subject: "",
      apiDataLoaded: false
    }
  }

  componentDidMount = async () => {
    for (let i = 0; i < this.state.books.length; i++) {
      let data = await axios.get(`http://openlibrary.org/search.json?q="the+lord+of+the+rings"`)
      let newBook = data.data.docs[1];
      this.setState({
        bookInfo: newBook,
        title: newBook.title,
        author: newBook.author_name[0],
        subject: newBook.subject[0],
      })
      console.log(newBook);
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

  getBooks = async () => {
    const bookTitle = await this.getBooks(this.state.title);
    this.setState({
      bookTitle: bookTitle
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Nav />
       
        <Input 
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
          getBooks={this.getBooks}
          bookTitle={this.state.bookTitle}
        />
        {this.state.apiDataLoaded &&
          <Image
            data={this.state.bookData}
          />
        }
        <div id="bookRes">
          {/* <h2>{this.state.newBook}</h2>   */}
        <h2>{this.state.title}</h2>
        <h4>{this.state.author}</h4>
        <h4>{this.state.subject}</h4>
        </div>
        <Footer />
      </div>
    );
  }
}
export default App;