import React from 'react'
import { Box, Container } from '@material-ui/core';
import PostCard from '../../components/estaticos/postCard/PostCard';
import SideBar from '../../components/estaticos/sideBar/SideBar';
import DirBar from '../../components/estaticos/lateralDir/DirBar'
import './Feed.css'


    const post = [
        {id: 1, descricao : 'teste 1'},
        {id: 2, descricao : 'teste 2'},
        {id: 3, descricao : 'teste 3'},
        {id: 4, descricao : 'teste 4'}
    ]

function Feed() {
    return (
        
        <Container maxWidth='lg'>
            <Box display='flex'>
            <SideBar />
            <PostCard />
            <DirBar />
            </Box>
            

        </Container>
    )
}

export default Feed;
