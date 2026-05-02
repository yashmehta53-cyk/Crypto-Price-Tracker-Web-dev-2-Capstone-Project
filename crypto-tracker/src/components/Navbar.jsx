import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>CryptoApp</h2>
      <div>
        <Link to="/">Home</Link>
        <Link to="/favorites">Favorites</Link>
      </div>
    </nav>
  );
}

export default Navbar;