import React, { useState } from 'react'

interface TooltipProps {
  text: string
  children: React.ReactNode
}

function Tooltip({ text, children }: TooltipProps) {
  const [visible, setVisible] = useState(false)

  return (
    <span
      className="relative"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      {children}
      {visible && (
        <span className="absolute bottom-full mb-2 px-2 py-1 bg-black text-white text-xs rounded">
          {text}
        </span>
      )}
    </span>
  )
}

export default Tooltip