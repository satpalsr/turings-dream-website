'use client'
import { useState, useEffect } from 'react'
import RotatingImage from './RotatingImage'
import images from '@/public/images.json'

/** 
 * Helper function to pick N distinct random indices from an array 
 * unless array length is <= N, in which case return all indices 
 */
function pickRandomIndices(arrayLength: number, n: number) {
  if (arrayLength <= n) {
    return Array.from({ length: arrayLength }, (_, i) => i)
  }

  const selected = new Set<number>()
  while (selected.size < n) {
    const randomIndex = Math.floor(Math.random() * arrayLength)
    selected.add(randomIndex)
  }
  return Array.from(selected)
}

export default function HackhouseSection() {
  const [randomIndices, setRandomIndices] = useState<number[]>([])

  useEffect(() => {
    // On mount, pick the first set of 6 distinct images
    setRandomIndices(pickRandomIndices(images.hackhouseImages.length, 6))

    // Then, re-pick every 20 seconds
    const intervalId = setInterval(() => {
      setRandomIndices(pickRandomIndices(images.hackhouseImages.length, 6))
    }, 20000)

    return () => clearInterval(intervalId)
  }, [])

  return (
    <section className="relative w-full h-auto md:h-screen bg-[#FAFAFA] text-black px-6 md:px-24 py-12 md:py-16 snap-none md:snap-start">
      <div className="absolute inset-0 bg-grid-pattern opacity-70 z-0" />

      <div className="relative z-10">
        <h2 className="text-3xl md:text-5xl mb-8 md:mb-12">Turing&apos;s Dream Hackhouse</h2>

        {/* All images in a single column on mobile, 3 columns on md+ */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {[0, 1, 2, 3, 4, 5].map(i => (
            <div key={i} className="aspect-[3/2] md:aspect-[4/2.5] rounded-xl overflow-hidden">
              {randomIndices[i] != null && (
                <RotatingImage 
                  className="w-full h-full object-cover"
                  alt="Hackhouse activities"
                  index={randomIndices[i]}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


