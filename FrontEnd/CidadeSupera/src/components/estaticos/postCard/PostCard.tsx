import React, {useState} from 'react'
import { CardHeader, CardContent, CardActions,Typography, Card, Avatar, IconButton } from '@material-ui/core'
import { busca } from '../../../services/Service'
import './PostCard.css'

function PostCard() {
    
    return (
            <Card className="card">
                <CardHeader
                  avatar={
                    <Avatar aria-label="">
                      
                    </Avatar>
                  }
                  action={
                    <IconButton aria-label="">
                      
                    </IconButton>
                  }
                  title=""
                  subheader=""
                  
                />
                <CardContent>

                </CardContent>
                <CardActions></CardActions>
            </Card>
        
    )
}

export default PostCard
