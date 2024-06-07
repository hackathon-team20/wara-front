import { Avatar, Box, Chip, Typography } from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite';
import React from 'react'
import { UserInfo } from '../types';

interface UsersProps {
    users: UserInfo[];
}

const Show4thOrLower = ({ users }: UsersProps) => {
    return (
        <Box sx={{ mt: 2, borderTop: 1 }}>
            {users.slice(3).map((user, index) => (
                <Box key={String(user.user_id)} sx={{ display: 'flex', alignItems: 'center', mb: 2, p: 1, borderBottom: '1px solid #e0e0e0' }}>
                    <Chip label={index + 4} color="default" sx={{ mr: 2 }} />
                    <Avatar src={user.user_icon} sx={{ width: 60, height: 60, mr: 2 }} />
                    <Typography sx={{ flexGrow: 1 }}>{user.user_name}</Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mt: 1 }}>
                        <FavoriteIcon sx={{ mr: 1, color: '#f50057' }} />
                        <Typography>{user.User_HeartPoints.toLocaleString()}</Typography>
                        {/* <Typography>{user.User_HeartPoints.toLocaleString()}</Typography> */}
                    </Box>
                </Box>
            ))}
        </Box>
    )
}

export default Show4thOrLower