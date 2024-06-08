import { User, Users } from './types'

export const fetchAllUserRanking = async (): Promise<Users> => {
  const res = await fetch('http://localhost:8000/api/user/users', {
    headers: {
      'Content-Type': 'application/json'
    },
    cache: 'no-store'
  })
  const UsersRanking = res.json()
  return UsersRanking
}

export const getAllUserRa = async (): Promise<Users> => {
  const res = await fetch('http://localhost:8000/api/user/users', {
    headers: {
      'Content-Type': 'application/json'
    },
    cache: 'no-store'
  })
  const UsersRanking = res.json()
  return UsersRanking
}
