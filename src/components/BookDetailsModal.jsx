
import "../styles/BookDetailsModal.css";

function BookDetailsModal({ book, onClose }) {
  if (!book) return null;

  return (
    <div
      className="modal-overlay"
      onClick={onClose}
    >
      <div
        className="modal-content"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          className="close-button"
          onClick={onClose}
          aria-label="Close book details"
        >
          &times;
        </button>

        <div className="modal-body">

          <img
            src={book.image}
            alt={book.title}
          />

          <div className="modal-details">

            <span className="category">
              {book.category}
            </span>

            <h2>{book.title}</h2>

            <p className="author">
              By {book.author}
            </p>

            <p className="rating">
              ⭐ {book.rating} / 5
            </p>

            <h3>Description</h3>

            <p className="description">
              {book.description}
            </p>

            <h2 className="price">
              ${book.price.toFixed(2)}
            </h2>

            <button className="buy-button">
              Add to Cart
            </button>

          </div>
        </div>
      </div>
    </div>
  );
}

export default BookDetailsModal;
