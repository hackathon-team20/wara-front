//TODO:トークンがないとできないので認証作ってから実装

import { Avatar, Box, Button, Container, List, ListItem, ListItemText } from '@mui/material'
import { fetchMyUser } from '../api'

export default async function Page() {
  const MyUser = await fetchMyUser()
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
          <ListItemText primary="名前" secondary="けんしん" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Email" secondary="name@domain.com" />
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
          過去の答えたお題
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
