"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

interface MotionProps {
  children: React.ReactNode
  className?: string
  delay?: number
}

export function Motion({ children, className, delay }: MotionProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
