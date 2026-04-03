import { useState } from "react"
import { Link } from "react-router-dom"
import { FiMenu, FiX, FiUser } from "react-icons/fi"
import "../styles/navbar.css"

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="navbar">
      <div className="nav-brand">
        <Link to="/">FOSSEE Workshops</Link>
      </div>

      <button
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>

      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
        <li><Link to="/workshops" onClick={() => setMenuOpen(false)}>Workshops</Link></li>
        <li><Link to="/statistics" onClick={() => setMenuOpen(false)}>Statistics</Link></li>
        <li><Link to="/propose" onClick={() => setMenuOpen(false)}>Propose Workshop</Link></li>
        <li>
          <Link to="/profile" className="nav-profile" onClick={() => setMenuOpen(false)}>
            <FiUser size={18} />
            <span>My Profile</span>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar