import React from "react";
import "./Home.css";
import ReactPlayer from "react-player";
import { Grid, Box, Typography, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import Equipe from "../equipe/Equipe";
import Sobre from "../sobre/Sobre";

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
                    <Box paddingX={12} paddingTop={12}>
                        <Typography
                            variant="h5"
                            gutterBottom
                            component="h5"
                            margin-right="auto"
                            className="texto-titulo"
                        >
                            Bem vinde ao Cidade Supera!
                        </Typography>
                        <Typography
                            variant="h4"
                            gutterBottom
                            color="textPrimary"
                            component="h4"
                            margin-right="auto"
                            className="texto-titulo1"
                        >
                            Construindo um futuro melhor hoje!
                        </Typography>
                    </Box>
                    <Box paddingX={12} paddingTop={16}>

                        <Link to="/cadastroUsuario" className="text-decorator-none">
                            <Button variant="outlined" className="botao titulo botao-hover" >
                                Cadastre-se agora
                            </Button>
                        </Link>
                    </Box>
                </Grid>
                <Grid item xs={6} alignItems="center" justifyContent="center">
                    <Box paddingTop={10} >
                        <ReactPlayer
                            className="react-player"
                            playing={true}
                            loop={true}
                            muted={true}
                            url="https://www.youtube.com/watch?v=l7ZW7Y_eumQ"
                        ></ReactPlayer>
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

                    </Box>
                </Grid>
                {/* Equipe*/}
                <Sobre />
                <Equipe />
                {/*Não escreva nada abaixo*/}
            </Grid>
        </>
    );
}

export default Home;