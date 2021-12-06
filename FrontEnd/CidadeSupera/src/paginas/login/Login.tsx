import React from 'react';
import { Grid, Box, Typography, Button, TextField } from '@material-ui/core';
import './Login.css';

function Login() {


    return (
        <Grid container className="background" >
            <Grid item xs={12}>
                <Box display="flex" justifyContent="center" alignItems="center" height="80vh" >
                    <Box className="card" width={370} height="50vh" borderRadius={20} marginTop={12} display="flex" justifyContent="center" alignItems="center">
                        <Box marginY={2}>
                            <Typography variant="h5" color="initial" align="center">
                                Login
                            </Typography>
                            <form >
                                <Box marginY={4}>
                                    <TextField id="Usuario" label="Usuário" variant="outlined" name="Usuario" />
                                </Box>
                                <Box marginY={4} >
                                    <TextField id="Senha" label="Senha" variant="outlined" name="senha" />
                                </Box >
                                <Box>
                                    <Button variant="contained" color="secondary" className="botao1">
                                        Login
                                    </Button>
                                </Box>
                            </form>
                        </Box>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    )
}

export default Login;
