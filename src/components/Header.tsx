import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className="bg-blue-700 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">VoiceCraftHub</h1>
        <nav className="space-x-4">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/about" className="hover:underline">About</Link>
          <Link to="/programs" className="hover:underline">Programs</Link>
          <Link to="/certifications" className="hover:underline">Certifications</Link>
          <Link to="/contact" className="hover:underline">Contact</Link>
          <Link to="/enroll" className="hover:underline">Enroll</Link>
        </nav>
      </div>
    </header>
  )
}

export default Header