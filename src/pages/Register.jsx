import { useState } from "react"
import { Link } from "react-router-dom"
import "../styles/login.css"
import "../styles/register.css"

function Register() {
  const [step, setStep] = useState(1)
  const [form, setForm] = useState({
    first_name: "", last_name: "", email: "",
    username: "", password: "", confirm_password: "",
    institute: "", department: "", phone: "", position: ""
  })
  const [errors, setErrors] = useState({})

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
    setErrors({ ...errors, [e.target.name]: "" })
  }

  function validateStep1() {
    const e = {}
    if (!form.first_name.trim()) e.first_name = "First name is required"
    if (!form.email.includes("@")) e.email = "Enter a valid email"
    if (!form.username.trim()) e.username = "Username is required"
    if (form.password.length < 8) e.password = "Password must be at least 8 characters"
    if (form.password !== form.confirm_password) e.confirm_password = "Passwords do not match"
    return e
  }

  function handleNext() {
    const e = validateStep1()
    if (Object.keys(e).length > 0) { setErrors(e); return }
    setStep(2)
  }

  function handleSubmit(e) {
    e.preventDefault()
    alert("Registration submitted! Check your email for activation.")
  }

  return (
    <div className="auth-page">
      <div className="auth-card register-card">

        <div className="auth-header">
          <h1>Create Account</h1>
          <p>Join FOSSEE Workshops from — IIT Bombay</p>
        </div>

        <div className="step-indicator">
          <div className={`step-dot ${step >= 1 ? "done" : ""}`}>1</div>
          <div className="step-line" />
          <div className={`step-dot ${step >= 2 ? "done" : ""}`}>2</div>
        </div>

        {step === 1 && (
          <div className="auth-form">
            <div className="form-row">
              <div className="form-group">
                <label>First Name</label>
                <input name="first_name" value={form.first_name} onChange={handleChange} placeholder="First name" />
                {errors.first_name && <span className="field-error">{errors.first_name}</span>}
              </div>
              <div className="form-group">
                <label>Last Name</label>
                <input name="last_name" value={form.last_name} onChange={handleChange} placeholder="Last name" />
              </div>
            </div>
            <div className="form-group">
              <label>Email</label>
              <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="your@email.com" />
              {errors.email && <span className="field-error">{errors.email}</span>}
            </div>
            <div className="form-group">
              <label>Username</label>
              <input name="username" value={form.username} onChange={handleChange} placeholder="Choose a username" />
              {errors.username && <span className="field-error">{errors.username}</span>}
            </div>
            <div className="form-group">
              <label>Password</label>
              <input name="password" type="password" value={form.password} onChange={handleChange} placeholder="Min. 8 characters" />
              {errors.password && <span className="field-error">{errors.password}</span>}
            </div>
            <div className="form-group">
              <label>Confirm Password</label>
              <input name="confirm_password" type="password" value={form.confirm_password} onChange={handleChange} placeholder="Repeat password" />
              {errors.confirm_password && <span className="field-error">{errors.confirm_password}</span>}
            </div>
            <button className="btn-primary-full" onClick={handleNext}>Next →</button>
          </div>
        )}

        {step === 2 && (
          <form className="auth-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Institute</label>
              <input name="institute" value={form.institute} onChange={handleChange} placeholder="Your college/university" />
            </div>
            <div className="form-group">
              <label>Department</label>
              <input name="department" value={form.department} onChange={handleChange} placeholder="e.g. Computer Science" />
            </div>
            <div className="form-group">
              <label>Phone Number</label>
              <input name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="10-digit mobile number" />
            </div>
            <div className="form-group">
              <label>Position</label>
              <select name="position" value={form.position} onChange={handleChange}>
                <option value="">Select your role</option>
                <option value="Student">Student</option>
                <option value="Faculty">Faculty</option>
                <option value="Research Scholar">Research Scholar</option>
                <option value="Industry Professional">Industry Professional</option>
              </select>
            </div>
            <div className="reg-btn-row">
              <button type="button" className="btn-back" onClick={() => setStep(1)}>← Back</button>
              <button type="submit" className="btn-primary-full" style={{flex:1}}>Create Account</button>
            </div>
          </form>
        )}

        <div className="auth-footer">
          <span>Already have an account?</span>
          <Link to="/login">Sign in</Link>
        </div>

      </div>
    </div>
  )
}

export default Register