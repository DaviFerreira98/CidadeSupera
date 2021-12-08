import React, { useState, useEffect, ChangeEvent } from 'react';
import { useHistory } from 'react-router-dom';
import User from '../../models/User';
import { cadastroUsuario } from '../../services/Service';
import { Grid, Box, Typography, Button, TextField } from '@material-ui/core';
import { Link } from 'react-router-dom';
import './CadastroUsuario.css';

function CadastroUsuario() {
    let history = useHistory();
    const [confirmarSenha, setConfirmarSenha] = useState<String>("")
    const [user, setUser] = useState<User>(
        {
            id: 0,
            nome: '',
            usuario: '',
            senha: ''
        })

    const [userResult, setUserResult] = useState<User>(
        {
            id: 0,
            nome: '',
            usuario: '',
            senha: ''
        })

    useEffect(() => {
        if (userResult.id !== 0) {
            history.push("/login")
        }
    }, [userResult])


    function confirmarSenhaHandle(e: ChangeEvent<HTMLInputElement>) {
        setConfirmarSenha(e.target.value)
    }


    function updatedModel(e: ChangeEvent<HTMLInputElement>) {

        setUser({
            ...user,
            [e.target.name]: e.target.value
        })

    }
    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        if (confirmarSenha === user.senha) {
            cadastroUsuario(`/usuarios/cadastrar`, user, setUserResult)
            alert('Usuario cadastrado com sucesso')
        } else {
            alert('Dados inconsistentes. Favor verificar as informações de cadastro.')
        }
    }
    return (
        <Grid container direction="row" justifyContent="center" alignItems="center">
            <Grid item xs={6} className="img" alignItems="center">
                <img src="https://i.imgur.com/H4QDZL3.jpg" alt="" className="img" />
            </Grid>
            <Grid item xs={6} alignItems="center">
                <Box paddingX={10}>
                    <Box textAlign="center">
                        <img src="https://i.imgur.com/MIYkCjy.png" alt="logo Cidade Supera" />
                    </Box>
                    <Box marginTop={4} textAlign='center'>
                        <form >
                            <Typography variant='h5' gutterBottom color='textPrimary' component='h3' align='left'>Informações básicas</Typography>
                            <TextField id='nome' label='Nome' variant='standard' name='nome' margin='normal' fullWidth />
                            <TextField id='usuario' label='Usuário' variant='outlined' name='usuario' margin='normal' fullWidth />
                            <TextField id='senha' label='Senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth />
                            <TextField id='confirmarSenha' label='Confirmar Senha' variant='outlined' name='confirmarSenha' margin='normal' type='password' fullWidth />
                            <Box display='flex' justifyContent='center' marginTop={2} textAlign='center'>
                                <Link to='/login' className='text-decorator-none'>
                                    <Button variant='contained' className='btnCancelar'>
                                        Cancelar
                                    </Button>
                                </Link>
                                <Button type='submit' variant='contained' className='botao1'>
                                        Cadastrar
                                </Button>
                            </Box>
                        </form>
                        <Box display='flex' justifyContent='center' marginTop={2}>
                                <Box marginRight={1}>
                                    <Typography variant='subtitle1' gutterBottom align='center'>Já possui uma conta?</Typography>
                                </Box>
                                <Link to='/login' className='text-decorator-none'>
                                    <Typography variant="subtitle1" gutterBottom align='center' className='txt' >Logue-se</Typography>
                                </Link>
                            </Box>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    )
}

export default CadastroUsuario;
