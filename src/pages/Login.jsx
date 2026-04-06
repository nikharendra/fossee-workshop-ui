import { useState } from "react"
import { Link } from "react-router-dom"
import "../styles/login.css"

function Login() {
  const [formData, setFormData] = useState({ username: "", password: "" })
  const [error, setError] = useState("")
  const [showPassword, setShowPassword] = useState(false)

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (!formData.username || !formData.password) {
      setError("Please fill in all fields.")
      return
    }
    setError("")
    // In real app: call Django API here currently this is just a sample 
    alert("Login submitted!")
  }

  return (
    <div className="auth-page">
      <div className="auth-card">

        <div className="auth-header">
          <h1>FOSSEE Workshops</h1>
          <p>Sign in to book or manage workshops</p>
        </div>

        {error && (
          <div className="auth-error" role="alert">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Enter your username"
              value={formData.username}
              onChange={handleChange}
              autoComplete="username"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <div className="password-wrap">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                autoComplete="current-password"
              />
              <button
                type="button"
                className="toggle-pw"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          <button type="submit" className="btn-primary-full">
            Sign In
          </button>
        </form>
{/* Password reset concept */}
        <div className="auth-footer">
          <Link to="/forgot-password">Forgot password?</Link>
          <span>·</span>
          <Link to="/register">Create an account</Link>
        </div>

      </div>
    </div>
  )
}

export default Login