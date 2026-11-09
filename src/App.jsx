
import { useState, useEffect } from "react";

import Navbar from "./components/Navbar";
import BookList from "./components/BookList";
import BookDetailsModal from "./components/BookDetailsModal";

import books from "./data/book";
import "./styles/App.css";

function App() {

  // Stores the currently selected book
  const [selectedBook, setSelectedBook] = useState(null);

  // Opens the selected book
  const handleBookClick = (book) => {
    setSelectedBook(book);
  };

  // Closes the popup
  const handleClose = () => {
    setSelectedBook(null);
  };

  // Close popup when Escape key is pressed
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        handleClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="app">

      <Navbar />

      <header className="hero" id="home">
        <h1>Find Your Next Favorite Book</h1>

        <p>
          Explore our collection of books and discover
          something new every day.
        </p>
      </header>

      <BookList
        books={books}
        onBookClick={handleBookClick}
      />

      <BookDetailsModal
        book={selectedBook}
        onClose={handleClose}
      />

    </div>
  );
}

export default App;
