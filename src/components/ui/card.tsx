import React from 'react'

interface CardProps {
  title: string
  children: React.ReactNode
}

function Card({ title, children }: CardProps) {
  return (
    <div className="border rounded shadow p-4 bg-white">
      <h2 className="text-lg font-bold mb-2">{title}</h2>
      {children}
    </div>
  )
}

export default Card