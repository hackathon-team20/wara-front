import React from 'react'
import { getAllPosts } from '../api';
import TimeLine from '../components/TimeLine';

const page = async () => {
    const post_res: any = await getAllPosts();
    console.log(post_res);
    return (
        <div>
            <TimeLine posts={post_res} />
        </div>
    );
}

export default page