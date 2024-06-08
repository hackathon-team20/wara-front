import { Box, Container, Typography } from '@mui/material'
import Title from '@/app/components/Title'
import PostForm from '@/app/posts/PostForm'
import CountDownTimer from '../components/CountDownTimer'
import { TopicData } from '../types'
import { fetchLatestTopic } from '../api'

export default async function PostPage() {
  const TopicData: TopicData = await fetchLatestTopic()
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
      <Title topic={TopicData.topic.topic} image={TopicData.topic.image} />
      <PostForm />
    </Container>
  )
}
