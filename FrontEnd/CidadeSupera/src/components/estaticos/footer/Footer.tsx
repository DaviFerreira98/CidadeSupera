import React from 'react';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import {Typography, Box, Grid, TextField } from '@material-ui/core';
import {Link} from 'react-router-dom';
import './Footer.css';

function Footer() {
    return (
        <>
            <Grid container id="Rodape">
                <Grid item xs={4}>
                    <Box padding={10}>
                        <Box paddingBottom={2}>
                        <Typography variant="h5" align="left" style={{fontWeight:'bold'}}>Cidade Supera</Typography>
                        </Box>
                        <Typography align="left">Nós somos uma rede Social e temos como objetivo
                        conectar os problema das pessoas com as soluçoes</Typography>
                        <Typography variant="h6" align="left" style={{fontWeight:'bold'}}>Redes Sociais</Typography>
                        <Box paddingBottom={2}>
                        <a href="" target="_blank">
                                <FacebookIcon style={{ fontSize: 40, color: "black" }} />
                            </a>
                            <a href="" target="_blank">
                                <InstagramIcon style={{ fontSize: 40, color: "black" }} />
                            </a>
                            <a href="" target="_blank">
                                <LinkedInIcon style={{ fontSize: 40, color: "black" }} />
                            </a>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={4}>
                    <Box padding={10}>
                    <Box paddingBottom={2}>
                        <Typography variant="h5" align="left" style={{fontWeight:'bold'}}>Empresa</Typography>
                    </Box>
                    <Box>
                        <Typography align="left"></Typography>
                        <Link to='/equipe' className="text-decorator-none2">
                        <Typography align="left">Equipe</Typography>
                        </Link>
                    </Box>
                    <Box>
                        <Typography align="left">Contato</Typography>
                    </Box>    
                    </Box>
                </Grid>
                <Grid item xs={4}>
                    <Box padding={10}>
                    <Typography variant="h5" align="left" style={{fontWeight:'bold'}}>Nos de seu FeedBack</Typography>
                    <TextField id="Email" label="Email" variant="outlined" name="email"></TextField>
                    </Box>
                </Grid>
            </Grid>
        </>   
    )
}

export default Footer;