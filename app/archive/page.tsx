'use client'

import { useEffect, useState } from 'react'
import { Tweet } from 'react-tweet'
import Link from 'next/link'

interface TimelineItem {
  id: string
  tweetUrl: string
}

export default function ArchivePage() {
  const [timelineData, setTimelineData] = useState<TimelineItem[]>([])

  useEffect(() => {
    const fetchTweets = async () => {
      const response = await fetch('/tweets.json')
      const data = await response.json()

      // Reverse so that the latest tweet is at the top.
      const tweetData = data.hackhouseTweets
        .map((url: string, index: number) => ({
          id: String(index + 1),
          tweetUrl: url
        }))

      setTimelineData(tweetData)
    }

    fetchTweets()
  }, [])

  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      {/* Grid pattern background */}
      <div className="fixed inset-0 bg-grid-pattern opacity-70 z-0" />

      {/* --- NAVBAR --- */}
      <nav className="
        sticky top-0 z-50 
        flex justify-between items-center 
        px-6 md:px-40 py-2 md:py-4
        bg-[#FAFAFA]/80 backdrop-blur-md
      ">
        <h1 className="text-2xl md:text-4xl font-bold">Archive</h1>
        <Link
          href="/"
          className="text-xl md:text-2xl hover:underline"
        >
          Home
        </Link>
      </nav>

      {/* --- MAIN CONTENT --- */}
      <main className="
        relative z-10
        max-w-6xl mx-auto 
        px-2 md:px-8 py-12
        space-y-12
      ">
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[1.1rem] top-0 bottom-0 w-0.5 bg-black opacity-20 block" />

          {timelineData.map((item) => (
            <div key={item.id} className="relative flex items-start mb-16">
              {/* Timeline dot */}
              <div className="flex flex-col items-center mr-6">
                <div className="w-4 h-4 rounded-full bg-black opacity-20" />
              </div>

              {/* Tweet card */}
              <div className="
                flex-1 
                max-w-[550px]
                bg-white
                border border-gray-200

                rounded-xl shadow-md 
                transform transition 
              ">
                <div className='tweet-container'>
                <div className="origin-center">
                  <Tweet id={item.tweetUrl.split('/').pop() || ''} />
                </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
