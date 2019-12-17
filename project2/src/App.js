import React, { Component } from 'react';
import './App.css';
// import { Route } from 'react-router-dom';
import { fetchData } from './services/books';
import Input from './components/input';
import Image from './components/image';
// import axios from 'axios';
import Footer from './components/footer';
import Header from './components/header';
import Nav from './components/nav';
import Book from './components/Book';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      value: "",
      bookInfo: [],
      title: "",
      author: "",
      subject: "",
      apiDataLoaded: false
    }
  }

  componentDidMount = async () => {
    // for (let i = 0; i < this.state.books.length; i++) {
    //   let data = await axios.get(`http://openlibrary.org/search.json?q=${Input}`)
    //   let newBook = data.data.docs;
    //   this.setState({
    //     bookInfo: newBook,
    //     title: newBook.title,
    //     author: newBook.author_name,
    //     subject: newBook.subject,
    //   })
    //   console.log(newBook);
    // }
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
    const selectedBooks = books.splice(0, 3)
    console.log(selectedBooks)
    this.setState(state => ({
      books: [...selectedBooks,...state.books],
      apiDataLoaded: true
    }))
  }
  // getBooks = async () => {
  //   const bookTitle = await this.getBooks(this.state.title);
  //   this.setState({
  //     bookTitle: bookTitle
  //   })
  // }
  renderBooks = () => {
    if (this.state.books.length) {
      return this.state.books.map((book,index) => (
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
        <Header />
        <Nav />
        <Input
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
          // getBooks={this.getBooks}
          bookTitle={this.state.bookTitle}
        />
        {/* {this.state.apiDataLoaded &&
          <Image
            data={this.state.bookData}
          />
        } */}
        <div id="bookRes">
          {this.renderBooks()}

        </div>
        <Footer />
      </div>
    );
  }
}
export default App;