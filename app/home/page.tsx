'use client'
import React, { useEffect, useState } from 'react'
import { fetchTimeline, getAllPosts } from '../api'
import TimeLine from '../components/TimeLine'
import BottomAppBar from '../components/BottomAppBar'
import Title from '../components/Title'
import { TimeLineData } from '../types'

const Page = () => {
  const [Timeline, setTimeline] = useState<TimeLineData | undefined>()

  useEffect(() => {
    const token = localStorage.getItem('token')
    const fetchTimeline = async (token: string | null) => {
      const res = await fetch('http://localhost:8000/api/user/posts', {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        cache: 'no-store'
      })
      const Timeline = await res.json()
      setTimeline(Timeline)
    }
    fetchTimeline(token)
  }, [])

  return (
    <div>
      <Title topic="test" image="n" />
      {Timeline && <TimeLine posts={Timeline.posts} />}
      <BottomAppBar />
    </div>
  )
}

export default Page
