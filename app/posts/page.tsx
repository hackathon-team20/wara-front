'use client'
import { Box, Container, Typography } from '@mui/material'
import Title from '@/app/components/Title'
import PostForm from '@/app/posts/PostForm'
import CountDownTimer from '../components/CountDownTimer'
import { PostData, TopicData } from '../types'
import { fetchLatestTopic } from '../api'
import { useEffect, useState } from 'react'

export default function PostPage() {
  const [topic, setTopic] = useState<TopicData | undefined>()

  useEffect(() => {
    const token = localStorage.getItem('token')
    const fetchLatestTopic = async (token: string | null) => {
      const res = await fetch(`http://localhost:8000/api/user/recent`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        cache: 'no-store'
      })
      const Topic: TopicData = await res.json()
      setTopic(Topic)
    }
    fetchLatestTopic(token)
  }, [])

  return (
    <Container
      component={'main'}
      maxWidth={false}
      disableGutters
      sx={{
        marginTop: '15px'
      }}
    >
      <CountDownTimer createdAt={new Date()} />
      <Box my={'10px'} textAlign={'center'}>
        <Typography variant={'h3'} fontWeight={'bolder'}>
          投稿する
        </Typography>
      </Box>
      <Title topic={topic?.topic.topic} image={topic?.topic.image} />
      <PostForm />
    </Container>
  )
}
