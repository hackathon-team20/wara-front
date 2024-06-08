import React from 'react'
import { fetchTimeline, getAllPosts } from '../api'
import TimeLine from '../components/TimeLine'
import BottomAppBar from '../components/BottomAppBar'
import Title from '../components/Title'

const page = async () => {
  const Timeline = await fetchTimeline()
  return (
    <div>
      <Title topic="test" image="n" />
      <TimeLine posts={Timeline.posts} />
      <BottomAppBar />
    </div>
  )
}

export default page
