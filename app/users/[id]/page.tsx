import { Avatar, Box, Button, Container, Link, List, ListItem, ListItemText } from '@mui/material'
import { fetchDetailUser, fetchMyUser, fetchUserPosts } from '../../api'
import { Post } from '@/app/types'

export default async function Page({ params }: { params: { id: number } }) {
  const DetailUser = await fetchDetailUser(params.id)
  const DetailPosts = await fetchUserPosts(params.id)

  return (
    <Container
      component="main"
      maxWidth="sm"
      sx={{
        mt: 4,
        p: 3,
        borderRadius: 2,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh'
      }}
    >
      <Box textAlign="center" mb={4}>
        <Avatar
          sx={{ width: 60, height: 60, mx: 'auto', my: 2 }}
          alt="User Icon"
          src="" // 適切なパスに変更
        />
      </Box>
      <List sx={{ width: '100%' }}>
        <ListItem>
          <ListItemText primary="名前" secondary={DetailUser.user.name} />
        </ListItem>
        <ListItem>
          <ListItemText primary="Email" secondary={DetailUser.user.email} />
        </ListItem>
      </List>
      <Box my={4} textAlign="center" display="flex" justifyContent="center" gap={2}>
        <Button
          variant="outlined"
          sx={{
            bgcolor: 'white',
            color: 'gray',
            borderColor: 'gray',
            '&:hover': {
              bgcolor: 'white',
              borderColor: 'gray'
            }
          }}
        >
          {/* TODO：postが複数個になるとレイアウト崩れます */}
          {DetailPosts.posts.map((post: Post) => (
            <Link href={`./posts/${DetailPosts.posts[0].id}`} underline="hover" color="inherit">
              {DetailPosts.posts[0].topic.topic}
            </Link>
          ))}
        </Button>
        <Button
          variant="outlined"
          sx={{
            bgcolor: 'white',
            color: 'gray',
            borderColor: 'gray',
            '&:hover': {
              bgcolor: 'white',
              borderColor: 'gray'
            }
          }}
        >
          ログアウト
        </Button>
      </Box>
    </Container>
  )
}
