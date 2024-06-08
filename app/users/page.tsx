//TODO:トークンがないとできないので認証作ってから実装
'use client'
import { Avatar, Box, Button, Container, Link, List, ListItem, ListItemText } from '@mui/material'
import { fetchMyUser } from '../api'
import { useEffect, useState } from 'react'
import { DetailUser, Post, Posts } from '../types'

export default function Page() {
  const [User, setUsers] = useState<DetailUser | undefined>()
  const [Posts, setPosts] = useState<Posts | undefined>()

  useEffect(() => {
    const token: string | null = localStorage.getItem('token')

    const fetchMyUser = async (token: string | null) => {
      const res = await fetch(`https://wara-back-qr9q.onrender.com/api/user/mypage`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        cache: 'no-store'
      })
      const MyUser = await res.json()
      setUsers(MyUser)
    }

    const fetchMyPosts = async (token: string | null) => {
      const res = await fetch(`https://wara-back-qr9q.onrender.com/api/user/mypost`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        cache: 'no-store'
      })
      const MyPosts = await res.json()
      setPosts(MyPosts)
    }

    fetchMyUser(token)
    fetchMyPosts(token)
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
          alt="User Icon"
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
