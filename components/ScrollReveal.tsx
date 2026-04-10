'use client'

import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

interface ScrollRevealProps {
  children: React.ReactNode
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'
  duration?: number
  className?: string
}

const getDirectionOffset = (direction: string) => {
  switch (direction) {
    case 'up':
      return { y: 40, x: 0 }
    case 'down':
      return { y: -40, x: 0 }
    case 'left':
      return { y: 0, x: 40 }
    case 'right':
      return { y: 0, x: -40 }
    case 'none':
    default:
      return { y: 0, x: 0 }
  }
}

export function ScrollReveal({
  children,
  delay = 0,
  direction = 'up',
  duration = 0.5,
  className = '',
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  // trigger animation once when it comes into view
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  const offset = getDirectionOffset(direction)

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={{
        hidden: { opacity: 0, ...offset },
        visible: { opacity: 1, y: 0, x: 0 },
      }}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      transition={{ duration, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}
