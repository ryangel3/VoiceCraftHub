import React from 'react'

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  children: React.ReactNode
}

function Label({ children, className = '', ...props }: LabelProps) {
  return (
    <label {...props} className={`block mb-1 font-medium text-gray-700 ${className}`}>
      {children}
    </label>
  )
}

export default Label