import React, {Component} from "react";
import axios from "axios";
import BookComponent from "../components/bookItem";

class LibraryPage extends Component{
  constructor(){
    super();
    this.state = {
      books: []
    }
  }

  componentDidMount(){
    this.getUserBooks();
  }

  getUserBooks = () => {
    axios.get("/user").then(response => {
      this.setState({books: response.data[0].books || []});
    })
  }

  removeBook = (data) => {
    axios.delete(`/books/${data._id}`).then(response => this.getUserBooks());
  }

  render(){
    return (
    <div>
      <p>Library</p>
      {this.state.books.map(book => {
        console.log(book);
        return <BookComponent volumeInfo={book} key={book.title} handle={this.removeBook} />
      })}
    </div>
   )
  }
}

export default LibraryPage;