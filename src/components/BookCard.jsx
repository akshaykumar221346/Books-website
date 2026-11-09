
function BookCard({ book, onBookClick }) {
  return (
    <div
      className="book-card"
      onClick={() => onBookClick(book)}
      role="button"
      tabIndex={0}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          onBookClick(book);
        }
      }}
    >
      <img
        src={book.image}
        alt={book.title}
        className="book-image"
      />

      <div className="book-info">
        <h3>{book.title}</h3>

        <p>{book.author}</p>

        <div className="book-footer">
          <span>${book.price.toFixed(2)}</span>
          <span>⭐ {book.rating}</span>
        </div>
      </div>
    </div>
  );
}

export default BookCard;
