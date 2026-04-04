import "../styles/footer.css"

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <strong>FOSSEE Workshops</strong>
          <p>Free/Libre and Open Source Software for Education</p>
          <p>IIT Bombay — Ministry of Education, Govt. of India</p>
        </div>
        <div className="footer-links">
          <span>Workshop Booking System</span>
          <span>·</span>
          <a href="https://fossee.in" target="_blank" rel="noopener noreferrer">fossee.in</a>
          <span>·</span>
          <a href="https://iitb.ac.in" target="_blank" rel="noopener noreferrer">IIT Bombay</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer