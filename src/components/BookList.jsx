
import BookCard from "./BookCard";
import "../styles/BookList.css";

function BookList({ books, onBookClick }) {
  return (
    <section className="books-section" id="books">

      <div className="section-heading">
        <h2>Discover Our Books</h2>
        <p>Explore books that inspire your journey.</p>
      </div>

      <div className="books-grid">
        {books.map((book) => (
          <BookCard
            key={book.id}
            book={book}
            onBookClick={onBookClick}
          />
        ))}
      </div>

    </section>
  );
}

export default BookList;
