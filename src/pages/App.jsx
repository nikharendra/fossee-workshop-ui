import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Login from "./pages/Login"
import Profile from "./pages/Profile"
import "./styles/index.css"

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<div style={{padding:"100px 24px"}}><h2>Home Page (coming soon)</h2></div>} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App