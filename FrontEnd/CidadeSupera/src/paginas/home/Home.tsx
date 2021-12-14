import React from 'react'
import './Home.css';
import { Grid, Box, Typography, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Equipe from '../equipe/Equipe';

function Home() {
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" className="home">

                <Grid alignItems="center" item xs={6} justifyContent="center">
                    <Box paddingX={18} paddingTop={15} >
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" className="texto-home" >Seja Bem-Vinde ao Cidade Supera!</Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className="texto-home" >Construindo um futuro melhor hoje!</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center" textAlign='center'>
                        <Link to='/sobre' className="text-decorator-none" >
                            <Button variant="outlined" className='botaoSaiba'>Saiba mais</Button>
                        </Link>
                        <Link to='/login' className="text-decorator-none">
                            <Button variant="outlined" className='botaoLogin'>Logue-se</Button>
                        </Link>
                    </Box>
                </Grid>
                <Grid item xs={6} alignItems="center" justifyContent="center">
                    <Box paddingTop={15} >
                        <img src="https://i.imgur.com/H4QDZL3.jpg" alt="" className="img-home" />
                    </Box>
                </Grid>

                <Grid xs={12}>
                    <Box paddingBottom={20} ></Box>
                </Grid>

                {/* integrando as outras páginas*/}
                <Grid alignItems="center" item xs={12} className="postagens" >
                    <Box >
                        < Equipe />
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}

export default Home;
