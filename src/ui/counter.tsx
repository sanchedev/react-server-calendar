'use client'

import { useState } from 'react'

export function Counter() {
  const [counter, setCounter] = useState(0)

  const handleCount = () => {
    setCounter(counter + 1)
  }

  return <button onClick={handleCount}>{counter}</button>
}
