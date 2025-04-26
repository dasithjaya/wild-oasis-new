'use client'
import { useState } from 'react'

export default function Counter({users}) {
  const [count, setCount] = useState(0)

  console.log(users)
  
  return (
    <div>
      <button onClick={() => setCount(c => c + 1)}>+</button>
      <h3>{count}</h3>
      <button onClick={() => setCount(c => c - 1)}>-</button>
    </div>
  )
}
