"use client";

import React, { useEffect, useState } from 'react'
import { Posts, User } from '../types'
import { Avatar, Box, Button, Card, CardContent, CardHeader, Typography } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
//import { DecrementHeartPoints, IncrementHeartPoints } from '../api';

interface PostsProps {
    posts: Posts[];
}
const TimeLine = ({ posts }: PostsProps) => {

    const [Allposts, setPost] = useState(posts);
    const [likedPosts, setLikedPosts] = useState<{ [key: number]: boolean }>({});

    // 初期状態を設定
    useEffect(() => {
        const initialLikedPosts: { [key: number]: boolean } = {};
        posts.forEach(post => {
            initialLikedPosts[post.user_id] = post.isReviewedByUser;
        });
        setLikedPosts(initialLikedPosts);
    }, [posts]);

    //ハートアイコンを押したときの処理
    const toggleHeartCount = (userId: number) => {
        setLikedPosts(prevLikedPosts => {
            const isLiked = prevLikedPosts[userId];
            const updatedPosts = Allposts.map(post => {
                if (post.user_id === userId) {
                    if (isLiked) {
                        return { ...post, total_hearts: post.total_hearts - 1 };
                    } else {
                        return { ...post, total_hearts: post.total_hearts + 1 };
                    }
                }
                return post;
            });
            setPost(updatedPosts);
            return { ...prevLikedPosts, [userId]: !isLiked };
        });
    };

    return (
        <div>
            {Allposts.map(post => (
                <Card key={post.user.id} sx={{ mb: 2 }}>
                    <CardHeader
                        avatar={<Avatar src={post.user.icon} alt={`${post.user.name}のアイコン`} sx={{ width: 60, height: 60, mr: 2 }} />}
                        title={
                            <Typography variant='h3' component="div" sx={{ fontSize: '1.3rem' }}>
                                {post.user.name}
                            </Typography>
                        }
                    />
                    <CardContent>
                        <Typography variant="body1" sx={{ fontSize: '1.5rem', textAlign: 'center', marginY: 'auto', fontWeight: 'bold' }}>
                            {post.post_content}
                        </Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Button
                                onClick={() => {
                                    toggleHeartCount(post.user_id)
                                    // いいね数更新のapiを叩けるようにするなら以下5行のコメントアウトを外す

                                    // if (!likedPosts[post.user_id]) {
                                    //     IncrementHeartPoints(post.id)
                                    // } else {
                                    //     DecrementHeartPoints(post.id)
                                    // }
                                }
                                }

                                startIcon={likedPosts[post.user_id]
                                    ? <FavoriteIcon sx={{ color: '#f50057', width: 30, height: 30 }} />
                                    : <FavoriteBorderIcon sx={{ color: '#f50057', width: 30, height: 30 }} />}
                                sx={{ marginLeft: 'auto', marginRight: 1 }}
                            />
                            <Typography sx={{ marginLeft: 0.5 }}>
                                {post.total_hearts}
                            </Typography>
                        </Box>

                    </CardContent>
                </Card>
            ))}
        </div>
    )
}

export default TimeLine