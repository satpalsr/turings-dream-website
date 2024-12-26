'use client'
import { useState, useEffect } from 'react'
import images from '@/public/images.json'

interface RotatingImageProps {
  className?: string
  alt?: string
  // index tells us which image in images.hackhouseImages to show
  index: number
}

export default function RotatingImage({ 
  className = "", 
  alt = "Hackhouse image",
  index
}: RotatingImageProps) {
  const [isTransitioning, setIsTransitioning] = useState(false)

  // Example fade-in effect:
  useEffect(() => {
    setIsTransitioning(true)
    // Fade in after mount
    const timeoutId = setTimeout(() => setIsTransitioning(false), 300) 
    return () => clearTimeout(timeoutId)
  }, [index]) // whenever index changes, re-trigger the fade

  return (
    <img
      src={images.hackhouseImages[index]}
      alt={alt}
      className={`
        ${className}
        transition-opacity duration-300
        ${isTransitioning ? 'opacity-0' : 'opacity-100'}
        object-cover aspect-[4/3]
      `}
    />
  )
}
