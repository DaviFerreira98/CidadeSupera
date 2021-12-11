import React from 'react'
import './Equipe.css';
import { Grid, Box, Button } from '@material-ui/core';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';


function Equipe() {
    return (
        <Grid container direction="row" justifyContent="center" alignItems="center">
            <Grid item xs={12} justifyContent="center" >
                <Box display='center' paddingTop={2}>
                    <Typography variant="h4" component="h4" align="center" className='texto-equipe'>Nosso Time:</Typography>
                </Box>
            </Grid>
            <Grid item xs={4} >
                <Grid justifyContent="center" >
                    <Box paddingTop={3} paddingLeft={10}>
                        <img src="https://i.imgur.com/9E1Vw0Y.jpg" alt="" className="img-container" />
                    </Box>
                </Grid>
            </Grid>
            <Grid item xs={4}>
                <Grid justifyContent="center">
                    <Box paddingTop={3} paddingLeft={10}>
                        <img src="https://i.imgur.com/9E1Vw0Y.jpg" alt="" className="img-container" />
                    </Box>
                </Grid>
            </Grid>
            <Grid item xs={4}>
                <Grid justifyContent="center">
                    <Box paddingTop={3} paddingLeft={10}>
                        <img src="https://i.imgur.com/9E1Vw0Y.jpg" alt="" className="img-container" />
                    </Box>
                </Grid>
            </Grid>
            <Grid item xs={6} >
                <Grid justifyContent="center" >
                    <Box paddingTop={2} paddingLeft={40}>
                        <img src="https://i.imgur.com/9E1Vw0Y.jpg" alt="" className="img-container" />
                    </Box>
                </Grid>
            </Grid>
            <Grid item xs={6}>
                <Grid justifyContent="center">
                    <Box paddingTop={2} paddingLeft={40}>
                        <img src="https://i.imgur.com/9E1Vw0Y.jpg" alt="" className="img-container" />
                    </Box>
                </Grid>
                <Grid item xs={12} justifyContent="center">
                    <Box display="flex" justifyContent="center" paddingTop={6}>
                        <Link to='/sobrenos' className="text-decorator-none">
                            <Button variant="outlined" className='botao-equipe'>Sobre Nós</Button>
                        </Link>
                    </Box>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Equipe;
