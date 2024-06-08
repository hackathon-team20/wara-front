import React from 'react'
import { Box } from '@mui/material'
import ShowTop3 from '../components/ShowTop3'
import Show4thOrLower from '../components/Show4thOrLower'
import { getAllUserRanking } from '../api'

const page = async () => {
  //ちゃんとapi通してやるならこっちのコメントアウトを外す
  const users = await getAllUserRanking()

  return (
    <Box sx={{ padding: 2, paddingTop: 6 }}>
      <h1
        className="
                    flex
                    justify-center
                    font-medium
                    text-2xl
                    pb-3
                "
      >
        Leaderboard
      </h1>
      <ShowTop3 users={users.users} />
      <Show4thOrLower users={users.users} />
    </Box>
  )
}

export default page
