//"use client";

import React from 'react'
import { Avatar, Box, Chip, Paper, Typography, createTheme } from '@mui/material';
import { getAllUserRanking } from '../api';
import ShowTop3 from '../components/ShowTop3';
import Show4thOrLower from '../components/Show4thOrLower';

const page = async () => {
    //ちゃんとapi通してやるならこっちのコメントアウトを外す
    //const Users_api = await getAllUserRanking();

    //api通さずに実行するならこっちをコメントアウトする
    const Users = [
        { user_id: 1, user_name: 'user1', User_HeartPoints: 100, user_icon: 'https://avatars.githubusercontent.com/u/583231?v=4', email: "abc@gmail.com" },
        { user_id: 2, user_name: 'user2', User_HeartPoints: 90, user_icon: 'https://avatars.githubusercontent.com/u/583231?v=4', email: "abc@gmail.com" },
        { user_id: 3, user_name: 'user3', User_HeartPoints: 80, user_icon: 'https://avatars.githubusercontent.com/u/583231?v=4', email: "abc@gmail.com" },
        { user_id: 4, user_name: 'user4', User_HeartPoints: 70, user_icon: 'https://avatars.githubusercontent.com/u/583231?v=4', email: "abc@gmail.com" },
        { user_id: 5, user_name: 'user5', User_HeartPoints: 60, user_icon: 'https://avatars.githubusercontent.com/u/583231?v=4', email: "abc@gmail.com" },
        { user_id: 6, user_name: 'user6', User_HeartPoints: 50, user_icon: 'https://avatars.githubusercontent.com/u/583231?v=4', email: "abc@gmail.com" },
        { user_id: 7, user_name: 'user7', User_HeartPoints: 40, user_icon: 'https://avatars.githubusercontent.com/u/583231?v=4', email: "abc@gmail.com" },
        { user_id: 8, user_name: 'user8', User_HeartPoints: 30, user_icon: 'https://avatars.githubusercontent.com/u/583231?v=4', email: "abc@gmail.com" },
        { user_id: 9, user_name: 'user9', User_HeartPoints: 20, user_icon: 'https://avatars.githubusercontent.com/u/583231?v=4', email: "abc@gmail.com" },
        { user_id: 10, user_name: 'user10', User_HeartPoints: 10, user_icon: 'https://avatars.githubusercontent.com/u/583231?v=4', email: "abc@gmail.com" },
        { user_id: 11, user_name: 'user11', User_HeartPoints: 10, user_icon: 'https://avatars.githubusercontent.com/u/583231?v=4', email: "abc@gmail.com" },
        { user_id: 12, user_name: 'user12', User_HeartPoints: 10, user_icon: 'https://avatars.githubusercontent.com/u/583231?v=4', email: "abc@gmail.com" },
        { user_id: 13, user_name: 'user13', User_HeartPoints: 10, user_icon: 'https://avatars.githubusercontent.com/u/583231?v=4', email: "abc@gmail.com" },
        { user_id: 14, user_name: 'user14', User_HeartPoints: 10, user_icon: 'https://avatars.githubusercontent.com/u/583231?v=4', email: "abc@gmail.com" },
        { user_id: 15, user_name: 'user15', User_HeartPoints: 10, user_icon: 'https://avatars.githubusercontent.com/u/583231?v=4', email: "abc@gmail.com" },
        { user_id: 16, user_name: 'user16', User_HeartPoints: 10, user_icon: 'https://avatars.githubusercontent.com/u/583231?v=4', email: "abc@gmail.com" },
        { user_id: 17, user_name: 'user17', User_HeartPoints: 10, user_icon: 'https://avatars.githubusercontent.com/u/583231?v=4', email: "abc@gmail.com" },
        { user_id: 18, user_name: 'user18', User_HeartPoints: 10, user_icon: 'https://avatars.githubusercontent.com/u/583231?v=4', email: "abc@gmail.com" },
        { user_id: 19, user_name: 'user19', User_HeartPoints: 10, user_icon: 'https://avatars.githubusercontent.com/u/583231?v=4', email: "abc@gmail.com" },
        { user_id: 20, user_name: 'user20', User_HeartPoints: 10, user_icon: 'https://avatars.githubusercontent.com/u/583231?v=4', email: "abc@gmail.com" },
    ];

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
            <ShowTop3 users={Users} />
            <Show4thOrLower users={Users} />
        </Box>
    );
}

export default page