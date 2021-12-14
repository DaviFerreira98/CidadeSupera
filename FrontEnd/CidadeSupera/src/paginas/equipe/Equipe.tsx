import React from 'react'
import './Equipe.css';
import { Grid, Box, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

function Equipe() {

    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid item xs={12} justifyContent="center" >
                    <Box display='center' paddingTop={2}>
                        <h3 className='textoEquipe' >Nosso Time:</ h3>
                    </Box>
                </Grid>
                <Grid item xs={6} >
                    <Grid justifyContent="center" >
                        <Box paddingTop={3} paddingLeft={35}>
                            <img src="https://i.imgur.com/9E1Vw0Y.jpg" alt="" className="img-container" />
                        </Box>
                    </Grid>
                </Grid>
                <Grid item xs={6}>
                    <Grid justifyContent="center">
                        <Box paddingTop={3} paddingRight={30}>
                            <img src="https://i.imgur.com/9E1Vw0Y.jpg" alt="" className="img-container" />
                        </Box>
                    </Grid>
                </Grid>
                <Grid item xs={6} >
                    <Grid justifyContent="center" >
                        <Box paddingTop={2} paddingLeft={35}>
                            <img src="https://i.imgur.com/9E1Vw0Y.jpg" alt="" className="img-container" />
                        </Box>
                    </Grid>
                </Grid>
                <Grid item xs={6}>
                    <Grid justifyContent="center">
                        <Box paddingTop={2} paddingRight={25}>
                            <img src="https://i.imgur.com/9E1Vw0Y.jpg" alt="" className="img-container" />
                        </Box>
                    </Grid>
                </Grid>
                <Grid item xs={12} justifyContent="center">
                    <Box display="flex" justifyContent="center" paddingTop={6} paddingBottom={10} >
                        <Link to='/sobrenos' className="text-decorator-none">
                            <Button variant="outlined" className='botao-equipe'>Sobre Nós</Button>
                        </Link>
                    </Box>
                </Grid>
            </Grid>
        </ >
    )
}

export default Equipe;
