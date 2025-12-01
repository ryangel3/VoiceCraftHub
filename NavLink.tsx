import React from 'react'
import { Link, useLocation } from 'react-router-dom'

interface NavLinkProps {
  to: string
  label: string
}

function NavLink({ to, label }: NavLinkProps) {
  const location = useLocation()
  const isActive = location.pathname === to

  return (
    <Link
      to={to}
      className={`px-3 py-2 rounded ${isActive ? 'bg-blue-600 text-white' : 'text-blue-700 hover:bg-blue-100'}`}
    >
      {label}
    </Link>
  )
}

export default NavLink