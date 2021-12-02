import React from 'react'
import './Equipe.css';
import {Grid, Box, Typography} from '@material-ui/core';

function Equipe() {
    return (
        <Grid container direction="row" justifyContent="center" alignItems="center">
            <Grid item xs={12} justifyContent="center" >
                <Box display='center' paddingTop={2}>
                    <Typography variant="h3" component="h3" align="center" className='texto'>Nosso Time:</Typography>
                </Box>
            </Grid>
            <Grid item xs={4} >
                <Grid justifyContent="center" >
                    <Box paddingTop={3} paddingLeft={10}>
                        <img src="https://i.imgur.com/9E1Vw0Y.jpg" alt="" className="img-container"/>
                    </Box>
                </Grid>
            </Grid>
            <Grid item xs={4}>
                <Grid justifyContent="center">
                    <Box paddingTop={3} paddingLeft={10}>
                        <img src="https://i.imgur.com/9E1Vw0Y.jpg" alt="" className="img-container"/>
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
                        <img src="https://i.imgur.com/9E1Vw0Y.jpg" alt="" className="img-container"/>
                    </Box>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Equipe;
