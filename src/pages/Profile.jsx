import "../styles/profile.css"
import { FiEdit2 } from "react-icons/fi"
import { Link } from "react-router-dom"

// Dummy data — mirrors what Django sends (just for showcase purpose)
const user = {
  first_name: "Harendra",
  last_name: "Yadav",
  email: "harendra@example.com",
  institute: "ABC Engineering College",
  phone: "9876543210",
  department: "Computer Science",
  location: "Chennai",
  position: "Student"
}

const workshops = [
  { instructor: "Dr. Prabhu", date: "2026-05-10", type: "Python" },
  { instructor: "", date: "2026-06-01", type: "Scilab" },
  { instructor: "Dr. Sharma", date: "2026-06-20", type: "OpenFOAM" },
]

function Profile() {
  return (
    <div className="profile-page">

      <div className="profile-hero">
        <div className="avatar">
          {user.first_name[0]}{user.last_name[0]}
        </div>
        <div className="profile-name">
          <h2>{user.first_name} {user.last_name}</h2>
          <span className="position-badge">{user.position}</span>
        </div>
        <Link to="/edit-profile" className="edit-btn">
          <FiEdit2 size={16} /> Edit Profile
        </Link>
      </div>

      <div className="profile-grid">
        <div className="info-card">
          <h3>Personal Details</h3>
          <div className="info-list">
            <div className="info-row">
              <span className="info-label">Email</span>
              <span className="info-value">{user.email}</span>
            </div>
            <div className="info-row">
              <span className="info-label">Phone</span>
              <span className="info-value">{user.phone}</span>
            </div>
            <div className="info-row">
              <span className="info-label">Institute</span>
              <span className="info-value">{user.institute}</span>
            </div>
            <div className="info-row">
              <span className="info-label">Department</span>
              <span className="info-value">{user.department}</span>
            </div>
            <div className="info-row">
              <span className="info-label">Location</span>
              <span className="info-value">{user.location}</span>
            </div>
          </div>
        </div>

        <div className="workshops-card">
          <h3>My Workshops</h3>
          {workshops.length === 0 ? (
            <p className="no-workshops">No workshops booked yet.</p>
          ) : (
            <div className="workshop-list">
              {workshops.map((w, i) => (
                <div key={i} className="workshop-row">
                  <div className="workshop-info">
                    <span className="workshop-type">{w.type}</span>
                    <span className="workshop-date">{w.date}</span>
                  </div>
                  {w.instructor ? (
                    <span className="badge confirmed">{w.instructor}</span>
                  ) : (
                    <span className="badge pending">Pending</span>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

    </div>
  )
}

export default Profile