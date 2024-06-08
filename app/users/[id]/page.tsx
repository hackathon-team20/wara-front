'use client'
import { Avatar, Box, Button, Container, Link, List, ListItem, ListItemText } from '@mui/material'
import { DetailUser, Post, Posts } from '@/app/types'
import { useEffect, useState } from 'react'

export default function Page({ params }: { params: { id: number } }) {
  const [User, setUsers] = useState<DetailUser | undefined>()
  const [Posts, setPosts] = useState<Posts | undefined>()

  useEffect(() => {
    const token: string | null = localStorage.getItem('token')

    const fetchDetailUser = async (id: number, token: string | null) => {
      const res = await fetch(`https://wara-back-qr9q.onrender.com/api/user/otherUser/${id}`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        cache: 'no-store'
      })
      const User = await res.json()
      setUsers(User)
    }

    const fetchUserPosts = async (id: number, token: string | null) => {
      const res = await fetch(`https://wara-back-qr9q.onrender.com/api/user/otherUserPosts/${id}`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        cache: 'no-store'
      })
      const Posts = await res.json()
      setPosts(Posts)
    }

    fetchDetailUser(params.id, token)
    fetchUserPosts(params.id, token)
  }, [])

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
          alt={User?.user.name}
          src={User?.user.icon} // 適切なパスに変更
        />
      </Box>
      <List sx={{ width: '100%' }}>
        <ListItem>
          <ListItemText primary="名前" secondary={User?.user.name} />
        </ListItem>
        <ListItem>
          <ListItemText primary="Email" secondary={User?.user.email} />
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
          {Posts?.posts.map((post: Post) => (
            <Link key={post.id} href={`./posts/${post.id}`} underline="hover" color="inherit">
              {post.topic.image}
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
function async(id: number, token: string | null) {
  throw new Error('Function not implemented.')
}
