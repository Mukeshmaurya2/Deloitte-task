import React, { useState } from "react";
import BookItem from "./BookItem";
import "./BookList.css";

const initialBooks = [
  {
    id: 1,
    title: "The Pragmatic Programmer",
    description: "A guide to software craftsmanship and best practices.",
    imageUrl: "https://m.media-amazon.com/images/I/41as+WafrFL.jpg",
  },
  {
    id: 2,
    title: "Clean Code",
    description: "A handbook of agile software craftsmanship by Robert C. Martin.",
    imageUrl: "",
  },
];

const BookList = () => {
  const [books, setBooks] = useState(initialBooks);

  const handleAddBook = () => {
    const newBook = {
      id: Date.now(),
      title: `New Book ${books.length + 1}`,
      description: "This is a newly added book.",
      imageUrl: "",
    };
    setBooks((prevBooks) => [...prevBooks, newBook]);
  };

  return (
    <div className="book-list-container">
      <h1>📖 Book Library</h1>
      <button className="add-btn" onClick={handleAddBook}>
        + Add New Book
      </button>

      <div className="book-list">
        {books.map((book) => (
          <BookItem key={book.id} {...book} />
        ))}
      </div>
    </div>
  );
};

export default BookList;
