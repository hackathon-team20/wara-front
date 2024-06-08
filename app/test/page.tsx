import { getAllUserRanking } from '../api'
import { User, Users } from '../types'

async function fetchUserRanking() {
  const response = await fetch('http://localhost:8000/api/user/users', {
    headers: {
      'Content-Type': 'application/json'
    },
    cache: 'no-store'
  })

  //   if (!response.ok) {
  //     throw new Error('Failed to fetch authors')
  //   }
  const data: Users = await response.json()
  return data
}

const page = async () => {
  const usersData = await getAllUserRanking()
  return (
    <div>
      {usersData.users.map((user: User) => (
        <p>{user.name}</p>
      ))}
      <p>{usersData.users[1].name}</p>
    </div>
  )
}
export default page
