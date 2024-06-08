import { User, Users } from './types'

export const getAllUserRanking = async (): Promise<Users> => {
  const res = await fetch('http://localhost:8000/api/user/users', {
    headers: {
      'Content-Type': 'application/json'
    },
    cache: 'no-store'
  })
  const UsersRanking = res.json()
  return UsersRanking
}
