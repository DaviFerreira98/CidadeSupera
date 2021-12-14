import React, { useEffect, useState } from 'react'
import { CardHeader, CardContent, CardActions, Typography, Card, Avatar, IconButton, Box } from '@material-ui/core'
import { busca } from '../../../services/Service';
import FavoriteIcon from '@material-ui/icons/Favorite';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import MessageIcon from '@material-ui/icons/Message';
import './PostCard.css'
import Postagem from '../../../models/Postagem';
import { useHistory } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';

function PostCard() {
  const [posts, setPosts] = useState<Postagem[]>([])
  const [token, setToken] = useLocalStorage('token');
  let history = useHistory();

  useEffect(() => {
    if (token == "") {
      alert("Você precisa estar logado")
      history.push("/login")

    }
  }, [token])

  async function getPost() {
    await busca("/postagens", setPosts, {
      headers: {
        'Authorization': token
      }
    })
  }

  useEffect(() => {

    getPost()

  }, [posts.length])

  return (
    <>
      {
        posts.map(post => (
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
              <Typography variant="h5" component="h2">
                {post.titulo}
              </Typography>
              <Typography variant="body2" component="p">
                {post.texto}
              </Typography>
              <img src={post.foto} alt="" />
              <Typography variant="body2" component="p">
                {post.tema?.categoria}
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label='Like'>
                <FavoriteIcon />
                <Typography style={{ cursor: 'pointer' }}
                  color='textSecondary'
                  variant='body2'
                >{'10'}</Typography>
              </IconButton>
              <IconButton aria-label='Comentario'>
                <MessageIcon />
                <Typography style={{ cursor: 'pointer' }}
                  color='textSecondary'
                  variant='body2'
                >{'10'}</Typography>
              </IconButton>
              <IconButton>
                <BookmarkIcon />
              </IconButton>
            </CardActions>
          </Card >

        ))
      }
    </>
  )
}

export default PostCard;