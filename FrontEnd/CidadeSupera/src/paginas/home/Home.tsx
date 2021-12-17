import React from "react";
import "./Home.css";
import ReactPlayer from 'react-player'
import { Grid, Box, Typography, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import {motion, AnimatePresence} from 'framer-motion'

function Home() {
    return (
        <>
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                className="home"
            >
                <Grid alignItems="center" item xs={6} justifyContent="center">
                    <Box paddingX={18} paddingTop={10}>
                        <Typography
                            variant="h3"
                            gutterBottom
                            color="textPrimary"
                            component="h3"
                            align="center"
                            className="texto-home"
                        >
                            Seja Bem-Vinde ao Cidade Supera!
                        </Typography>
                        <Typography
                            variant="h5"
                            gutterBottom
                            color="textPrimary"
                            component="h5"
                            align="center"
                            className="texto-home"
                        >
                            Construindo um futuro melhor hoje!
                        </Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Link to="/sobre" className="text-decorator-none">
                            <Button variant="outlined" className="botao">
                                Saiba mais
                            </Button>
                        </Link>
                        <Link to="/login" className="text-decorator-none">
                            <Button variant="outlined" className="botao">
                                Logue-se
                            </Button>
                        </Link>
                    </Box>
                </Grid>
                <Grid item xs={6} alignItems="center" justifyContent="center">
                    <Box paddingTop={10}>
                        <img
                            src="https://i.imgur.com/H4QDZL3.jpg"
                            alt=""
                            className="img-home"
                        />
                    </Box>
                </Grid>
                {/*Abaixo depois da palhaçada*/}
                <Grid item xs={12}>
                    <Box
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        height="80vh"
                        paddingTop={10}
                    >
                        {/*Player do vídeo, nao mexer sua vagabunda*/}

                        <ReactPlayer
                            className='react-player'
                            playing={true}
                            loop={true}
                            muted={true}
                            url="https://www.youtube.com/embed/vq5NvJvr55Q">
                        </ReactPlayer>
                    </Box>


                </Grid>
                {/*Não escreva nada abaixo*/}
            </Grid>
        </>
    );
}

export default Home;
