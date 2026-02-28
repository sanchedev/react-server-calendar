'use client'

import { useState } from 'react'
import z from 'zod'

export default function Counter({}: z.infer<typeof schema>) {
  const [counter, setCounter] = useState(0)

  const handleCount = () => {
    setCounter(counter + 1)
  }

  return <button onClick={handleCount}>{counter}</button>
}

export const schema = z.object({})
