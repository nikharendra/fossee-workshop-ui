import { useState } from "react"
import { Link } from "react-router-dom"
import { FiMenu, FiX, FiUser } from "react-icons/fi"
import "../styles/navbar.css"

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  // later this will come from real auth context
  const isLoggedIn = false

  function close() {
    setMenuOpen(false)
  }

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
        <li><Link to="/" onClick={close}>Home</Link></li>
        <li><Link to="/statistics" onClick={close}>Statistics</Link></li>

        {isLoggedIn ? (
          <>
            <li><Link to="/workshops" onClick={close}>Workshops</Link></li>
            <li><Link to="/propose" onClick={close}>Propose Workshop</Link></li>
            <li>
              <Link to="/profile" className="nav-profile" onClick={close}>
                <FiUser size={16} />
                <span>My Profile</span>
              </Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/login" className="nav-login" onClick={close}>
                Sign In
              </Link>
            </li>
            <li>
              <Link to="/register" className="nav-register" onClick={close}>
                Register
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  )
}

export default Navbar