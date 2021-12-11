import React from 'react';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { Typography, Box, Grid, TextField } from '@material-ui/core';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
    return (
        <>
            <Grid container id="Rodape">
                <Grid item xs={4}>
                    <Box padding={7}>
                        <Box paddingBottom={2}>
                            <h5 className='txt-footer bold' >Cidade Supera</h5>
                        </Box>
                        <Typography align="left" className='txt-footer' >Nós somos uma rede Social e temos como objetivo
                            conectar os problemas das pessoas com as soluções</Typography>
                        <Box paddingTop={2} >
                            <Typography variant="h6" align="left" className='txt-footer bold'>Redes Sociais</Typography>
                        </Box>
                        <Box paddingBottom={2}>
                            <a href="" target="_blank">
                                <FacebookIcon className='styleIcon' />
                            </a>
                            <a href="" target="_blank">
                                <InstagramIcon className='styleIcon' />
                            </a>
                            <a href="" target="_blank">
                                <LinkedInIcon className='styleIcon' />
                            </a>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={4}>
                    <Box padding={7}>
                        <Box paddingBottom={2}>
                            <Typography variant="h5" align="left" style={{ fontWeight: 'bold' }}>Empresa</Typography>
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
                    <Box padding={7}>
                        <Box paddingBottom={2}>
                            <Typography variant="h5" align="left" style={{ fontWeight: 'bold' }}>
                                Nos dê seu FeedBack
                            </Typography>
                            <TextField id="Email" label="Email" variant="standard" name="email"></TextField>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}

export default Footer;