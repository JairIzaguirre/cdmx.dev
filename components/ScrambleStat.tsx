'use client'

import React, { useEffect, useState, useRef } from 'react'
import { useInView } from 'framer-motion'

interface ScrambleStatProps {
  value: string
  duration?: number // duration in milliseconds
  delay?: number // delay before start in seconds
}

const chars = '0123456789'

export function ScrambleStat({ value, duration = 1200, delay = 0 }: ScrambleStatProps) {
  // Start with a state where numbers are replaced by '0'
  const [displayValue, setDisplayValue] = useState(() => 
    value.split('').map(char => /[0-9]/.test(char) ? '0' : char).join('')
  )
  
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  useEffect(() => {
    if (!isInView) return

    let timeoutId: NodeJS.Timeout
    let intervalId: NodeJS.Timeout

    // Wait for the requested delay
    timeoutId = setTimeout(() => {
      const startTime = Date.now()

      // Rapidly change the numbers
      intervalId = setInterval(() => {
        const elapsedTime = Date.now() - startTime

        if (elapsedTime >= duration) {
          clearInterval(intervalId)
          setDisplayValue(value) // Assure final value is exactly correct
        } else {
          // Generate a scramble string ensuring only digits are randomized
          const scrambled = value.split('').map((char) => {
            if (/[0-9]/.test(char)) {
              return chars[Math.floor(Math.random() * chars.length)]
            }
            return char
          }).join('')
          setDisplayValue(scrambled)
        }
      }, 50) 
    }, delay * 1000)

    return () => {
      clearTimeout(timeoutId)
      clearInterval(intervalId)
    }
  }, [isInView, value, duration, delay])

  return <span ref={ref}>{displayValue}</span>
}
