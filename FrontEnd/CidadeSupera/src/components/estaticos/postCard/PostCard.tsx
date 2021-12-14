import React, {useState} from 'react'
import { CardHeader, CardContent, CardActions,Typography, Card, Avatar, IconButton, Box} from '@material-ui/core'
import { busca } from '../../../services/Service';
import FavoriteIcon from '@material-ui/icons/Favorite';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import MessageIcon from '@material-ui/icons/Message';
import './PostCard.css'

function PostCard() {
    
    return (
            <Card className='card'>
                  
                <CardHeader
                  avatar={
                    <Avatar aria-label="">
                      A
                    </Avatar>
                  }
                  action={
                    <IconButton aria-label="">
                      
                    </IconButton>
                  }
                  title="Ariana"
                  subheader="Lugar ai"
                  
                />
                <CardContent>
                  <img src="https://mercadoeconsumo.com.br/wp-content/uploads/2021/10/reciclagem.jpg" alt="" />
                </CardContent>
                <CardActions disableSpacing>
                  <IconButton aria-label='Like'>
                    <FavoriteIcon />
                    <Typography style={{cursor : 'pointer'}}
                    color='textSecondary'
                    variant='body2'
                    >{'10'}</Typography>
                  </IconButton>
                  <IconButton aria-label='Comentario'>
                    <MessageIcon />
                    <Typography style={{cursor : 'pointer'}}
                    color='textSecondary'
                    variant='body2'
                    >{'10'}</Typography>
                  </IconButton>
                  <IconButton>
                    <BookmarkIcon />
                  </IconButton>
                </CardActions>
              </Card>
        
    )
}

export default PostCard
