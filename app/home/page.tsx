import React from 'react'
import { getAllPosts } from '../api';
import TimeLine from '../components/TimeLine';
import BottomAppBar from '../components/BottomAppBar';
import Title from '../components/Title';

const page = async () => {
    const post_res: any = await getAllPosts();
    return (
        <div>
            <Title topic='test' image='n' />
            <TimeLine posts={post_res} />
            <BottomAppBar />
        </div>
    );
}

export default page