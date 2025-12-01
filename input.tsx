import React from 'react'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

function Input({ className = '', ...props }: InputProps) {
  return (
    <input
      {...props}
      className={`border rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
    />
  )
}

export default Input