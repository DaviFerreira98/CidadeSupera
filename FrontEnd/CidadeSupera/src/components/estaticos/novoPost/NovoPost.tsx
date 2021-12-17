import { Button, Grid, Box, FormControl, FormHelperText, InputLabel, Select, TextField, Typography, MenuItem, Input, CardHeader, Avatar } from '@material-ui/core'
import React, { ChangeEvent, useEffect, useRef, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom';
import Postagem from '../../../models/Postagem';
import Tema from '../../../models/Tema';
import User from '../../../models/User';
import { busca, buscaId, post, put } from '../../../services/Service';
import './NovoPost.css';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { toast } from 'react-toastify';
import { BusinessCenterSharp } from '@mui/icons-material';

function NovoPost() {

    let history = useHistory();
    const idUser = useSelector<TokenState, TokenState["ids"]>((state) => state.ids);
    const { id } = useParams<{ id: string }>();
    const [temas, setTemas] = useState<Tema[]>([])
    const token = useSelector<TokenState, TokenState["tokens"]>((state) => state.tokens);

    useEffect(() => {
        if (token == "") {
            toast.info('Você precisa estar logado', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            })
            history.push("/login")

        }
    }, [token])

    const [user, setUser] = useState<User>(
        {
            id: idUser,
            nome: '',
            usuario: '',
            senha: ''

        })

    const [tema, setTema] = useState<Tema>(
        {
            id: 0,
            categoria: '',
            descricao: '',
        })
    const [postagem, setPostagem] = useState<Postagem>({
        id: 0,
        titulo: '',
        texto: '',
        foto: '',
        localizacao: '',
        tema: null,
        usuario:user
    })

    useEffect(() => {
         setPostagem({
             ...postagem,
             usuario: user
         })
     }, [user])

    useEffect(() => {
        setPostagem({
            ...postagem,
            tema: tema
        })
    }, [tema])

    async function getUser() {
        await busca("/usuarios", setUser, {
            headers: {
                'Authorization': token
            }
        })
    }

    useEffect(() => {
        getUser()
        if (id !== undefined) {
            findByIdPostagem(id)
        }
    }, [id])

    useEffect(() => {
        getTemas()
        if (id !== undefined) {
            findByIdPostagem(id)
        }
    }, [id])

    async function getTemas() {
        await busca("/temas", setTemas, {
            headers: {
                'Authorization': token
            }
        })
    }

    async function findByIdPostagem(id: string) {
        await buscaId(`postagens/${id}`, setPostagem, {
            headers: {
                'Authorization': token
            }
        })
    }

    function updatedPostagem(e: ChangeEvent<HTMLInputElement>) {

        setPostagem({
            ...postagem,
            [e.target.name]: e.target.value,
            tema: tema,
            usuario:user
        })

    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()

        if (id !== undefined) {
            put(`/postagens`, postagem, setPostagem, {
                headers: {
                    'Authorization': token
                }
            })
            alert('Postagem atualizada com sucesso');
        } else {
            post(`/postagens`, postagem, setPostagem, {
                headers: {
                    'Authorization': token
                }
            })
            alert('Postagem cadastrada com sucesso');
        }
        back()

    }

    function back() {
        history.push('/feed')
    }

    return (

        <Grid container direction="row" justifyContent="center" alignItems="center" >
            <Grid item xs={6} justifyContent="center">
                <Box paddingBottom={7} paddingTop={3} paddingX={5} >
                    <form onSubmit={onSubmit}>
                        <Box display='flex' alignItems='center'>
                            <Avatar />
                            <Typography variant="body1" color="initial">{postagem.usuario?.nome} </Typography>
                        </Box>
                        <TextField value={postagem.titulo} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedPostagem(e)} id="titulo" label="Titulo" variant="standard" name="titulo" margin="normal" fullWidth />
                        <TextField value={postagem.texto} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedPostagem(e)} id="texto" label="texto" name="texto" variant="standard" margin="normal" fullWidth />
                        <TextField value={postagem.foto} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedPostagem(e)} id="foto" label="URL: Foto" name="foto" variant="standard" margin="normal" fullWidth />
                        <TextField value={postagem.localizacao} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedPostagem(e)} id="local" label="Localidade" name="localizacao" variant="standard" margin="normal" />
                        <FormControl className='padding' >
                            <InputLabel id="demo-simple-select-helper-label" >Tema </InputLabel>
                            <Select
                                labelId="demo-simple-select-helper-label"
                                id="demo-simple-select-helper"
                                onChange={(e) => buscaId(`/temas/${e.target.value}`, setTema, {
                                    headers: {
                                        'Authorization': token
                                    }
                                })}>
                                {
                                    temas.map(tema => (
                                        <MenuItem value={tema.id}>{tema.categoria}</MenuItem>
                                    ))
                                }
                            </Select>
                            <FormHelperText>Escolha um tema para a postagem </FormHelperText>
                            <Button type="submit" variant="contained" className="botaoFinal" >
                                Postar
                            </Button>
                        </FormControl>
                    </form>
                </Box>
            </Grid>
        </Grid >
    )
}

export default NovoPost;

