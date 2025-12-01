import React from 'react'

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {}

function Checkbox({ className = '', ...props }: CheckboxProps) {
  return (
    <input
      type="checkbox"
      {...props}
      className={`h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 ${className}`}
    />
  )
}

export default Checkbox