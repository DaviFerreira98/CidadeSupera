import React from 'react'
import { Box, Container } from '@material-ui/core';
import PostCard from '../../components/estaticos/postCard/PostCard';
import SideBar from '../../components/estaticos/sideBar/SideBar';
import DirBar from '../../components/estaticos/lateralDir/DirBar'
import NovoPost from '../../components/estaticos/novoPost/NovoPost';
import './Feed.css'


function Feed() {
    return (
        <>
            <SideBar />
            <Box className='dir-bar'>
            <DirBar />
            </Box>
            <Box display='flex' className='center'>
            <NovoPost />
            </Box>
            <Box display='flex' className='center'>
            <PostCard />
            </Box>
            

            
        </>
    )
}

export default Feed;

