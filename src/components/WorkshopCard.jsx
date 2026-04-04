import { Link } from "react-router-dom"
import { FiCalendar, FiUser, FiUsers } from "react-icons/fi"
import "../styles/workshopcard.css"

function WorkshopCard({ workshop }) {
  const { id, title, instructor, date, seats, booked, type, status } = workshop
  const spotsLeft = seats - booked
  const fillPercent = Math.round((booked / seats) * 100)

  return (
    <div className="workshop-card">

      <div className="card-top">
        <span className={`type-tag type-${type.toLowerCase()}`}>{type}</span>
        <span className={`status-badge status-${status}`}>
          {status === "upcoming" ? "Open" : status === "full" ? "Full" : "Pending"}
        </span>
      </div>

      <h3 className="card-title">{title}</h3>

      <div className="card-meta">
        <div className="meta-row">
          <FiUser size={14} />
          <span>{instructor}</span>
        </div>
        <div className="meta-row">
          <FiCalendar size={14} />
          <span>{new Date(date).toLocaleDateString("en-IN", { day:"numeric", month:"short", year:"numeric" })}</span>
        </div>
      </div>

      <div className="seats-info">
        <div className="seats-text">
          <span><FiUsers size={13} /> {spotsLeft > 0 ? `${spotsLeft} spots left` : "No spots left"}</span>
          <span>{booked}/{seats}</span>
        </div>
        <div className="progress-bar" role="progressbar" aria-valuenow={fillPercent} aria-valuemin={0} aria-valuemax={100}>
          <div className="progress-fill" style={{ width: `${fillPercent}%`, background: fillPercent >= 100 ? "#e74c3c" : fillPercent > 70 ? "#f39c12" : "#27ae60" }} />
        </div>
      </div>

      <Link
        to={`/workshops/${id}`}
        className={`book-btn ${status === "full" ? "disabled" : ""}`}
        aria-disabled={status === "full"}
      >
        {status === "full" ? "Fully Booked" : status === "pending" ? "View Details" : "Book Now"}
      </Link>

    </div>
  )
}

export default WorkshopCard