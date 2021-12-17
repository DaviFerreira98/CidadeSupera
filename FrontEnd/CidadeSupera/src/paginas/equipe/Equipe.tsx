import React from 'react'
import './Equipe.css';
import { Grid, Box, Button, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';


function Equipe() {

    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid item xs={12} justifyContent="center" >
                    <Box display='center' paddingTop={2}>
                        <h3 className='textoEquipe' >Nosso Time:</ h3>
                    </Box>
                </Grid>
                
                <Grid item xs={4} >
                    <Grid justifyContent="center" >
                    <Box paddingTop={2} paddingLeft={10}>
                        <img src="https://avatars.githubusercontent.com/u/76879747?s=400&u=55376ef8af47bb09a94b07b3e8560ee3f8fdda05&v=4" id='Davi' alt="" className="img-container" />
                            
                        <Box maxWidth='250px'>
                            <Typography variant="h5" color="initial">Davi Ferreira</Typography>
                        <Typography variant="body2" color="initial">
                        Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, 
                        e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos
                        e os embaralhou para fazer um livro de modelos de tipos.
                        Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica,
                        permanecendo essencialmente inalterado
                        </Typography>
                        <Box className='rede'>
                        <a href="https://github.com/DaviFerreira98" target="_blank">
                            <GitHubIcon style={{ fontSize: 40, color: "black" }} />
                        </a>
                        <a href="" target="_blank">
                            <InstagramIcon style={{ fontSize: 40, color: "black" }} />
                        </a>
                        <a href="https://www.linkedin.com/in/davi-ferreira-da-silva-8561b6125/" target="_blank">
                            <LinkedInIcon style={{ fontSize: 40, color: "black" }} />
                        </a>
                        </Box>
                        </Box>
                        </Box>
                        
                    </Grid>
                </Grid>
                <Grid item xs={4}>
                    <Grid justifyContent="center">
                    <Box paddingTop={2} paddingLeft={10}>
                        <img src="https://avatars.githubusercontent.com/u/91294318?v=4" id='Lucas' alt="" className="img-container" />
                        
                        <Box maxWidth='250px'>
                        <Typography variant="h5" color="initial">Lucas Figueredo</Typography>
                        <Typography variant="body2" color="initial">
                        Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, 
                        e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos
                        e os embaralhou para fazer um livro de modelos de tipos.
                        Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica,
                        permanecendo essencialmente inalterado
                        </Typography>
                        <Box className='rede'>
                        <a href="https://github.com/DomLucaz" target="_blank">
                            <GitHubIcon style={{ fontSize: 40, color: "black" }} />
                        </a>
                        <a href="" target="_blank">
                            <InstagramIcon style={{ fontSize: 40, color: "black" }} />
                        </a>
                        <a href="https://www.linkedin.com/in/domlucaz/" target="_blank">
                            <LinkedInIcon style={{ fontSize: 40, color: "black" }} />
                        </a>
                        </Box>
                        </Box>
                        </Box>
                    </Grid>
                </Grid>
                <Grid item xs={4} >
                    <Grid justifyContent="center" >
                    <Box paddingTop={2}>
                        <img src="https://avatars.githubusercontent.com/u/87380408?v=4" id='Ju' alt="" className="img-container mexer" />
                        </Box>
                        <Box
                        alignItems='center'
                        justifyContent='center'
                        maxWidth='250px'><Typography variant="h5" color="initial">Juliana Macedo</Typography>
                        <Typography variant="body2" color="initial">
                        Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, 
                        e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos
                        e os embaralhou para fazer um livro de modelos de tipos.
                        Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica,
                        permanecendo essencialmente inalterado
                        </Typography>
                        <Box
                        justifyContent='center'
                        alignItems='center'
                        className='rede'>
                        <a href="https://github.com/julianacsmacedo" target="_blank">
                            <GitHubIcon style={{ fontSize: 40, color: "black" }} />
                        </a>
                        <a href="" target="_blank">
                            <InstagramIcon style={{ fontSize: 40, color: "black" }} />
                        </a>
                        <a href="https://www.linkedin.com/in/juliana-cs-macedo/" target="_blank">
                            <LinkedInIcon style={{ fontSize: 40, color: "black" }} />
                        </a>
                        </Box>
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
