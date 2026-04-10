'use client'

import React, { useState, useEffect, useRef } from 'react'
import { useInView } from 'framer-motion'

export interface TerminalSegment {
  text?: string
  className?: string
  newLine?: boolean
}

interface TerminalTextProps {
  segments: TerminalSegment[]
  delay?: number // in seconds
  typingSpeed?: number // ms per char
}

export function TerminalText({ segments, delay = 0.2, typingSpeed = 50 }: TerminalTextProps) {
  const [typedSegments, setTypedSegments] = useState<TerminalSegment[]>([])
  const [cursorVisible, setCursorVisible] = useState(true)
  
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  useEffect(() => {
    const cursorInterval = setInterval(() => setCursorVisible(v => !v), 500)
    return () => clearInterval(cursorInterval)
  }, [])

  const segmentsHash = JSON.stringify(segments)

  useEffect(() => {
    if (!isInView) return

    const safeSegments = JSON.parse(segmentsHash) as TerminalSegment[]
    setTypedSegments(safeSegments.map(s => ({ ...s, text: '' })))

    let isCancelled = false
    let currentSegmentIndex = 0
    let currentCharIndex = 0
    let timer: NodeJS.Timeout

    const startDelay = setTimeout(() => {
      const typeChar = () => {
        if (isCancelled) return
        if (currentSegmentIndex >= safeSegments.length) return

        const segment = safeSegments[currentSegmentIndex]
        const targetText = segment.text || ''
        
        if (currentCharIndex < targetText.length) {
          setTypedSegments(prev => {
            const next = [...prev]
            if (next[currentSegmentIndex]) {
              next[currentSegmentIndex] = {
                ...next[currentSegmentIndex],
                text: targetText.substring(0, currentCharIndex + 1)
              }
            }
            return next
          })
          currentCharIndex++
          timer = setTimeout(typeChar, typingSpeed)
        } else {
          // ensure the full text is set just in case
          setTypedSegments(prev => {
            const next = [...prev]
            if (next[currentSegmentIndex]) {
              next[currentSegmentIndex] = {
                ...next[currentSegmentIndex],
                text: targetText
              }
            }
            return next
          })
          currentSegmentIndex++
          currentCharIndex = 0
          timer = setTimeout(typeChar, targetText ? typingSpeed : 0)
        }
      }

      typeChar()

    }, delay * 1000)

    return () => {
      isCancelled = true
      clearTimeout(startDelay)
      clearTimeout(timer)
    }
  }, [isInView, segmentsHash, delay, typingSpeed])

  return (
    <span ref={ref} className="grid text-center">
      {/* Invisible placeholder for natural flow and max width/height reservation */}
      <span className="col-start-1 row-start-1 opacity-0 pointer-events-none select-none">
        {segments.map((seg, idx) => (
          <React.Fragment key={idx}>
            {seg.newLine && <br />}
            <span className={seg.className}>{seg.text}</span>
          </React.Fragment>
        ))}
        {/* Placeholder cursor to match exact wrapping dimensions */}
        <span className="inline-block w-[0.4em] h-[1em] ml-1" />
      </span>
      
      {/* Typing overlay */}
      <span className="col-start-1 row-start-1">
        {typedSegments.map((seg, idx) => (
          <React.Fragment key={idx}>
            {seg.newLine && <br />}
            <span className={seg.className}>{seg.text}</span>
          </React.Fragment>
        ))}
        {/* Terminal cursor block */}
        <span 
          className={`inline-block w-[0.4em] h-[1em] bg-primary-400 ml-1 translate-y-[0.1em] align-baseline ${cursorVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-75`} 
        />
      </span>
    </span>
  )
}
