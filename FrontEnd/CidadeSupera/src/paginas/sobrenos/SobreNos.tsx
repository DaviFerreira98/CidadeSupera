import React from 'react';
import './SobreNos.css';
import { Grid, Box, Typography } from '@material-ui/core';

function SobreNos() {
    return (
        <Grid container direction="row" justifyContent="center" alignItems="center">
            <Grid item xs={12} justifyContent="center" alignItems="center">
                <Box display='center' paddingTop={2}>
                    <Typography variant="h4" component="h4" align="center" className='texto'>Nosso Time:</Typography>
                </Box>
            </Grid>
            <Grid item xs={6} justifyContent="center" alignItems="center">
                <Box paddingTop={3} paddingLeft={25} >
                    <img src="https://i.imgur.com/9E1Vw0Y.jpg" alt="" className="img-sobre"/>
                </Box>
                <Box paddingTop={3}>
                    <Typography variant="h5" color="initial" className="titulo-sobre" >Davi Ferreira</Typography>
                </Box>
                <Box paddingTop={1} paddingLeft={5}>
                    <Typography variant="body1" color="initial" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint consectetur cumque quaerat repellat exercitationem soluta, laborum quas illo molestiae quo eum aperiam amet asperiores praesentium unde itaque ipsam inventore vel?</Typography>
                </Box>
                <Box paddingTop={3} paddingLeft={25}>
                    <img src="https://i.imgur.com/9E1Vw0Y.jpg" alt="" className="img-sobre" />
                </Box>
                <Box paddingTop={3} paddingLeft={5}>
                    <Typography variant="h5" color="initial" className="titulo-sobre" >Larissa Alvarenga</Typography>
                </Box>
                <Box paddingTop={1} paddingLeft={5}>
                    <Typography variant="body1" color="initial" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint consectetur cumque quaerat repellat exercitationem soluta, laborum quas illo molestiae quo eum aperiam amet asperiores praesentium unde itaque ipsam inventore vel?</Typography>
                </Box>
            </Grid>
                
            <Grid item xs={6} justifyContent="center">
                <Box paddingTop={3} paddingLeft={25}>
                    <img src="https://i.imgur.com/9E1Vw0Y.jpg" alt="" className="img-sobre" />
                </Box>
                <Box paddingTop={3} paddingLeft={5}>
                    <Typography variant="h5" color="initial" className="titulo-sobre" >Juliana Macedo</Typography>
                </Box>
                <Box paddingTop={1} paddingLeft={5}>
                    <Typography variant="body1" color="initial" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint consectetur cumque quaerat repellat exercitationem soluta, laborum quas illo molestiae quo eum aperiam amet asperiores praesentium unde itaque ipsam inventore vel?</Typography>
                </Box>
                <Box paddingTop={3} paddingLeft={25}>
                    <img src="https://i.imgur.com/9E1Vw0Y.jpg" alt="" className="img-sobre" />
                </Box>
                <Box paddingTop={3} paddingLeft={5}>
                    <Typography variant="h5" color="initial" className="titulo-sobre" >Lucas Figueiredo</Typography>
                </Box>
                <Box paddingTop={1} paddingLeft={5}>
                    <Typography variant="body1" color="initial" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint consectetur cumque quaerat repellat exercitationem soluta, laborum quas illo molestiae quo eum aperiam amet asperiores praesentium unde itaque ipsam inventore vel?</Typography>
                </Box>
            </Grid>
        </Grid>
    )
}

export default SobreNos;
