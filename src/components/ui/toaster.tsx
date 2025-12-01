import React from 'react'
import { useToast } from '../../hooks/use-toast'

function Toaster() {
  const { message } = useToast()
  if (!message) return null

  return (
    <div className="fixed bottom-4 right-4 bg-blue-600 text-white px-4 py-2 rounded shadow">
      {message}
    </div>
  )
}

export default Toaster