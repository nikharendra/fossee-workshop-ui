import { useState } from "react"
import { Link } from "react-router-dom"
import WorkshopCard from "../components/WorkshopCard"
import "../styles/home.css"

// dummy workshop data — in production this is fetched from Django REST API
const allWorkshops = [
  { id: 1, title: "Python for Scientific Computing", instructor: "Dr. Prabhu Ramachandran", date: "2026-05-15", seats: 30, booked: 18, type: "Python", status: "upcoming" },
  { id: 2, title: "Scilab for Engineering", instructor: "Dr. Manas Das", date: "2026-05-22", seats: 25, booked: 25, type: "Scilab", status: "full" },
  { id: 3, title: "OpenFOAM Fluid Simulation", instructor: "Dr. Anand Kumar", date: "2026-06-01", seats: 20, booked: 9, type: "OpenFOAM", status: "upcoming" },
  { id: 4, title: "DWSIM Process Simulation", instructor: "Pending", date: "2026-06-10", seats: 35, booked: 12, type: "DWSIM", status: "pending" },
  { id: 5, title: "eSim Circuit Design", instructor: "Dr. Rakhi T", date: "2026-06-18", seats: 30, booked: 21, type: "eSim", status: "upcoming" },
  { id: 6, title: "OpenModelica Workshop", instructor: "Dr. Nikita S", date: "2026-07-02", seats: 25, booked: 5, type: "OpenModelica", status: "upcoming" },
]

const filters = ["All", "Python", "Scilab", "OpenFOAM", "DWSIM", "eSim", "OpenModelica"]

function Home() {
  const [active, setActive] = useState("All")
  const [search, setSearch] = useState("")

  // filters workshops by selected type tab AND search input simultaneously
  const visible = allWorkshops.filter(w => {
    const matchFilter = active === "All" || w.type === active
    const matchSearch = w.title.toLowerCase().includes(search.toLowerCase())
    return matchFilter && matchSearch
  })

  return (
    <div className="home-page">

      <section className="hero">
        <div className="hero-content">
          <h1>FOSSEE Workshop Booking</h1>
          <p>Book hands-on workshops on open-source tools — Python, Scilab, OpenFOAM and more. Conducted by IIT Bombay faculty.</p>
          <div className="hero-actions">
             <Link to="/register" className="hero-btn primary">Register Free</Link>
             <Link to="/login" className="hero-btn outline">Sign In</Link>
             <Link to="/statistics" className="hero-btn outline">View Statistics</Link>
          </div> 
        </div>
      </section>

      <section className="workshops-section">
        <div className="section-header">
          <h2>Available Workshops</h2>
          <input
            type="search"
            placeholder="Search workshops..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="search-input"
            aria-label="Search workshops"
          />
        </div>

        <div className="filter-tabs" role="tablist">
          {filters.map(f => (
            <button
              key={f}
              role="tab"
              aria-selected={active === f}
              className={`filter-tab ${active === f ? "active" : ""}`}
              onClick={() => setActive(f)}
            >
              {f}
            </button>
          ))}
        </div>

        {visible.length === 0 ? (
          <div className="no-results">
            <p>No workshops found for "{search}"</p>
          </div>
        ) : (
          <div className="cards-grid">
            {visible.map(w => (
              <WorkshopCard key={w.id} workshop={w} />
            ))}
          </div>
        )}
      </section>

    </div>
  )
}

export default Home