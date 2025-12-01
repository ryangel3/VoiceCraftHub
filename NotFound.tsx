import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className="space-y-4 text-center">
      <h2 className="text-2xl font-bold">404 - Page Not Found</h2>
      <p>Oops! The page you’re looking for doesn’t exist.</p>
      <Link to="/" className="text-blue-600 hover:underline">Go back Home</Link>
    </div>
  )
}

export default NotFound