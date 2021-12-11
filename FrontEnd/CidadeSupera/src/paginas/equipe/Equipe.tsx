import React from 'react'
import './Equipe.css';
import { Grid, Box, Button, Container} from '@material-ui/core';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';

function Equipe() {
    return (

        <Grid container direction="row" justifyContent="center" alignItems="center">
            <Grid item xs={12} justifyContent="center" >
                <Box display='center' paddingTop={2}>
                    <h3 className='textoEquipe' >Nosso Time:</ h3>
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
                    <Box paddingTop={2} paddingLeft={10}>
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
    )
}

export default Equipe;
