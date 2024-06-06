//"use client";

import React from 'react'
import { Avatar, Box, Chip, Paper, Typography, createTheme } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { getAllUserRanking } from '../api';
import { theme } from '../theme';
import ShowTop3 from '../components/ShowTop3';
import Show4thOrLower from '../components/Show4thOrLower';

const page = async () => {
    const Users_api = await getAllUserRanking();

    // const Users = [
    //     { userid: 1, username: 'user1', HeartPoints: 100, usericon: '/GHOSPOT.png' },
    //     { userid: 2, username: 'user2', HeartPoints: 90, usericon: '/GHOSPOT.png' },
    //     { userid: 3, username: 'user3', HeartPoints: 80, usericon: '/GHOSPOT.png' },
    //     { userid: 4, username: 'user4', HeartPoints: 70, usericon: '/GHOSPOT.png' },
    //     { userid: 5, username: 'user5', HeartPoints: 60, usericon: '/GHOSPOT.png' },
    //     { userid: 6, username: 'user6', HeartPoints: 50, usericon: '/GHOSPOT.png' },
    //     { userid: 7, username: 'user7', HeartPoints: 40, usericon: '/GHOSPOT.png' },
    //     { userid: 8, username: 'user8', HeartPoints: 30, usericon: '/GHOSPOT.png' },
    //     { userid: 9, username: 'user9', HeartPoints: 20, usericon: '/GHOSPOT.png' },
    //     { userid: 10, username: 'user10', HeartPoints: 10, usericon: '/GHOSPOT.png' },
    //     { userid: 11, username: 'user11', HeartPoints: 10, usericon: '/GHOSPOT.png' },
    //     { userid: 12, username: 'user12', HeartPoints: 10, usericon: '/GHOSPOT.png' },
    //     { userid: 13, username: 'user13', HeartPoints: 10, usericon: '/GHOSPOT.png' },
    //     { userid: 14, username: 'user14', HeartPoints: 10, usericon: '/GHOSPOT.png' },
    //     { userid: 15, username: 'user15', HeartPoints: 10, usericon: '/GHOSPOT.png' },
    //     { userid: 16, username: 'user16', HeartPoints: 10, usericon: '/GHOSPOT.png' },
    //     { userid: 17, username: 'user17', HeartPoints: 10, usericon: '/GHOSPOT.png' },
    //     { userid: 18, username: 'user18', HeartPoints: 10, usericon: '/GHOSPOT.png' },
    //     { userid: 19, username: 'user19', HeartPoints: 10, usericon: '/GHOSPOT.png' },
    //     { userid: 20, username: 'user20', HeartPoints: 10, usericon: '/GHOSPOT.png' },
    // ];

    return (
        <Box sx={{ padding: 2, paddingTop: 6 }}>
            <h1
                className='
                    flex 
                    justify-center 
                    font-medium 
                    text-2xl
                    pb-3
                '
            >
                Leaderboard
            </h1>
            <ShowTop3 users={Users_api} />
            <Show4thOrLower users={Users_api} />
        </Box>
    );
}

export default page