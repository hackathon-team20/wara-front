export interface UserInfo {
  user_id: number
  user_name: string
  HeartPoints: number
  user_icon: string
}

export interface Users {
  users: User[]
}

export interface User {
  id: number
  name: string
  email: string
  email_verified_at: string
  created_at: string
  updated_at: string
  icon: string
  is_admin: boolean
  user_total_hearts: number
}
