import React from 'react'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'default' | 'success' | 'warning'
}

const styles: Record<NonNullable<BadgeProps['variant']>, string> = {
  default: 'bg-gray-200 text-gray-800',
  success: 'bg-green-600 text-white',
  warning: 'bg-yellow-500 text-black',
}

function Badge({ children, variant = 'default' }: BadgeProps) {
  return (
    <span className={`inline-block px-2 py-1 text-xs rounded ${styles[variant]}`}>
      {children}
    </span>
  )
}

export default Badge