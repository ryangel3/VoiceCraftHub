import React from 'react'

interface SonnerProps {
  message: string
}

function Sonner({ message }: SonnerProps) {
  return (
    <div className="fixed top-4 right-4 bg-green-600 text-white px-4 py-2 rounded shadow">
      {message}
    </div>
  )
}

export default Sonner