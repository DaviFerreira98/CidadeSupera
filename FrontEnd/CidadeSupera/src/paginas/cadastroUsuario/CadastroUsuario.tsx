import React , {useState, useEffect, ChangeEvent } from 'react';
import { useHistory } from 'react-router-dom';
import User from '../../models/User';
import { cadastroUsuario } from '../../services/Service';
import { Grid, Box, Typography, Button, TextField } from '@material-ui/core';
import { Link } from 'react-router-dom';
import './CadastroUsuario.css';

function CadastroUsuario() {
    let history = useHistory();
    const [confirmarSenha,setConfirmarSenha] = useState<String>("")
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


    function confirmarSenhaHandle(e: ChangeEvent<HTMLInputElement>){
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
        if(confirmarSenha === user.senha){
        cadastroUsuario(`/usuarios/cadastrar`, user, setUserResult)
        alert('Usuario cadastrado com sucesso')
        }else{
            alert('Dados inconsistentes. Favor verificar as informações de cadastro.')
        }
    }
    return (
        
        <Grid container direction="row" justifyContent="center" alignItems="center">
        <Grid item xs={6} className="img"> </Grid>
        <Grid item xs={6} alignItems="center"> 
            <Box paddingX={10}>
                <form>
                    <Typography variant='h3'gutterBottom color='textPrimary' component='h3'align='center'>cadastrar</Typography>
                    <TextField id='nome' label='nome' variant='outlined' name='nome' margin='normal' fullWidth />
                    <TextField id='usuario' label='usuário' variant='outlined' name='usuario' margin='normal' fullWidth />
                    <TextField id='senha' label='senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth />
                    <TextField id='confirmarSenha' label='confirmar senha' variant='outlined' name='confirmarSenha' margin='normal' type='password' fullWidth />
                    <Box marginTop={2} textAlign='center'>
                        <Link to='/login' className='text-none'>
                        <Button variant='contained' color='secondary'>cancelar</Button>
                        </Link>
                        <Button type='submit' variant='contained' color='primary'>cadastrar</Button>
                    </Box>
                </form>
            </Box>
        </Grid>
        </Grid>
    )
}

export default CadastroUsuario;
