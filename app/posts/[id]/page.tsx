import { Box, Container, Typography } from '@mui/material'
import Title from '@/app/components/Title'
import Answer from '@/app/components/Answer'
import { fetchDetailTopic } from '@/app/api'

export default async function PostPage({ params }: { params: { id: number } }) {
  const TopicData = await fetchDetailTopic(params.id)
  return (
    <Container component={'main'} maxWidth={false} disableGutters>
      <Box my={'60px'} textAlign={'center'}>
        <Typography variant={'h3'} fontWeight={'bolder'}>
          投稿する
        </Typography>
      </Box>
      <Title topic={TopicData.topic.topic} image={TopicData.topic.image} />
      <Answer id={params.id} />
    </Container>
  )
}
