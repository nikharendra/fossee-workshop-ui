import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { FiMenu, FiX, FiUser, FiLogOut } from "react-icons/fi"
import "../styles/navbar.css"

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  // in real app this comes from auth context / API
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const location = useLocation()

  function close() {
    setMenuOpen(false)
  }

  function handleLogout() {
    setIsLoggedIn(false)
    close()
  }

  function isActive(path) {
    return location.pathname === path ? "active" : ""
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
        {menuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
      </button>

      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>

        {/* always visible */}
        <li><Link to="/" className={isActive("/")} onClick={close}>Home</Link></li>
        <li><Link to="/statistics" className={isActive("/statistics")} onClick={close}>Statistics</Link></li>

        {isLoggedIn ? (
          <>
            <li><Link to="/workshops" className={isActive("/workshops")} onClick={close}>Workshops</Link></li>
            <li><Link to="/propose" className={isActive("/propose")} onClick={close}>Propose</Link></li>

            {/* profile dropdown replaced with direct link for simplicity */}
            <li>
              <Link to="/profile" className="nav-profile" onClick={close}>
                <FiUser size={15} />
                <span>My Profile</span>
              </Link>
            </li>

            <li>
              <button
                className="nav-logout"
                onClick={handleLogout}
                aria-label="Logout"
              >
                <FiLogOut size={15} />
                <span>Logout</span>
              </button>
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