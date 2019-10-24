import React, { Component } from "react";
import axios from "axios";
import BookComponent from "../components/bookItem";
import "./books.css";

class BooksPage extends Component {
  constructor() {
    super();
    this.state = {
      booksList: [],
      search: ""
    };
  }

  updateBooksSearch = e => {
    this.setState({ search: e.target.value });
  };

  addBookToLibrary = (data) => {
    axios.post("/books", {
      title: data.title,
      authors: data.authors,
      description: data.description,
      imageLinks: data.imageLinks,
      infoLink: data.infoLink
    });
  }

  bookSearch = () => {
    axios.get(`api/${this.state.search}`).then(response => {
      this.setState({ booksList: response.data});
    });
  };
  render() {
    return (
      <div>
        <p>Books Search Page</p>
        <input onChange={this.updateBooksSearch}></input>
        <button onClick={this.bookSearch}>Search</button>
        <div className="bookslist-wrapper">
          {this.state.booksList.map(book => {
            return <BookComponent volumeInfo={book.volumeInfo} key={book.id} handle={this.addBookToLibrary} fromLibrary/>;
          })}
        </div>
      </div>
    );
  }
}

export default BooksPage;
