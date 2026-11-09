
import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">BookStore</div>

      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#books">Books</a>
        <a href="#about">About</a>
      </div>

      <button className="nav-button">
        Explore Books
      </button>
    </nav>
  );
}

export default Navbar;
