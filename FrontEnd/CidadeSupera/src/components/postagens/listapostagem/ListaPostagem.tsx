import { Box, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';
import Postagem from '../../../models/Postagem';
import { busca } from '../../../services/Service';

function ListaPostagem() {

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
                    <Box m={2} >
                        <Typography color="textSecondary" gutterBottom>
                            Postagens
                        </Typography>
                        <Typography variant="h5" component="h2">
                            {post.titulo}
                        </Typography>
                        <Typography variant="body2" component="p">
                            {post.texto}
                        </Typography>
                        <Typography variant="body2" component="p">
                            {post.tema?.descricao}
                        </Typography>
                    </Box>
                ))
            }
        </>
    )
}

export default ListaPostagem;
