'use client'
import React, { useEffect, useState } from 'react'
import TimeLine from '../components/TimeLine'
import BottomAppBar from '../components/BottomAppBar'
import Title from '../components/Title'
import { TimeLineData } from '../types'

const Page = () => {
  const [timeline, setTimeline] = useState<TimeLineData | undefined>(undefined)

  useEffect(() => {
    const fetchTimeline = async () => {
      const token = localStorage.getItem('token')
      if (!token) {
        console.error('Token not found')
        return
      }

      try {
        const res = await fetch('http://localhost:8000/api/user/posts', {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
          },
          cache: 'no-store'
        })

        if (!res.ok) {
          throw new Error('Failed to fetch timeline data')
        }

        const data: TimeLineData = await res.json()
        setTimeline(data)
      } catch (error) {
        console.error('Error fetching timeline data:', error)
      }
    }

    fetchTimeline()
  }, [])

  return (
    <div>
      <Title topic="test" image="n" />
      {timeline && <TimeLine post={timeline.post} />}
      <BottomAppBar />
    </div>
  )
}

export default Page
