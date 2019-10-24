import React from "react";
import "./bookitem.css";

const BookItem = ({ volumeInfo, handle, fromLibrary}) => {
  let {
    title,
    authors = ["None Listed"],
    imageLinks = {thumbnail: "https://screenshotlayer.com/images/assets/placeholder.png"},
    description = "No description provided",
    infoLink
  } = volumeInfo;

  console.log(volumeInfo)

  const openBookInfo = (link) =>{
    window.open(link);
  }

  const AddBookToLibrary = (data) => {
    handle(data);
  }

  return (
    <div className="book-item-wrapper">
      <div className="book-item-picture-wrapper">
        <img src={imageLinks.thumbnail}></img>
      </div>
      <div className="book-item-right">
        <p>Title: {title}</p>
        <div>
          <p>
            Authors:
            {authors.map((author, id) => (
              <span key={author + id}>
                {" "}
                {author} {id < authors.length - 1 ? "," : ""}
              </span>
            ))}
          </p>
          <div>
            <p>{description.slice(0, 200)}...</p>
          </div>
          <button onClick={()=>openBookInfo(infoLink)}>More Info on Google Books -></button>
          <button onClick={()=>AddBookToLibrary(volumeInfo)}>{!fromLibrary ? "Remove book from library" : "Add book to library"}</button>
        </div>
      </div>
    </div>
  );
};

export default BookItem;
