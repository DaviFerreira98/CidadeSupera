import React from "react";
import './Sobre.css';
import { Grid, Box, Typography } from "@material-ui/core";

function Sobre() {

    return (
        <>
            {/* Nesta parte está somente a frase de destaque */}

            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
            >
                <Grid item xs={12}>
                    <Box
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        marginX="auto"
                        marginTop={10}
                    >
                        <Typography variant="h3" gutterBottom align="center">
                            Publique, encare os problemas e SUPERE!
                        </Typography>
                    </Box>
                </Grid>

                {/* Nesta parte inicia as informações complementares*/}

                <Grid item xs={6}>
                    <Box
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        marginX="auto"
                        marginTop={40}
                        marginLeft={20}
                    >
                        <Typography variant="h4" color="initial" align="center">
                            Cidade Supera
                            <Typography variant="h5" color="initial" align="center" >
                                É o seu espaço de reclamação e sugestão de
                                melhoria para a sua cidade. Sua manifestação poderá causar impacto
                                na sua comunidade, superando os problemas e atingindo melhorias
                                sociais e estruturais
                            </Typography>
                        </Typography>
                    </Box>
                </Grid>

                <Grid item xs={6}>
                    <Box marginTop={30}>
                        <img
                            src="https://i.imgur.com/0t3rg8z.png"
                            alt=""
                            width="500px"
                            height="500px"
                        />
                    </Box>
                </Grid>

                {/* Nesta parte inicia a segunda box relacionada ao segundo comentário*/}

                <Grid item xs={6}>
                    <Box marginLeft={20}>
                        <img
                            src="https://i.imgur.com/0t3rg8z.png"
                            alt=""
                            width="500px"
                            height="500px"
                        />
                    </Box>
                </Grid>

                <Grid item xs={6}>
                    <Box
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        marginX="auto"
                        marginTop={25}
                        marginRight={20}
                    >
                        <Typography variant="h5" align="center" className="texto1">
                            Publique os problemas enfrentados: infraestrutura, segurança,
                            mobilidade, educação, saúde e saneamento básico que se encontram
                            em seu bairro. Discuta e compartilhe suas experiências não apenas
                            com moradores da redondeza, mas também com empresas e instituições
                            públicas interessadas em solucionar os problemas Pessoas formam
                            comunidades, e com a participação de órgãos públicos e empresas
                            poderemos solucionar JUNTOS os problemas, fazendo da nossa cidade
                            um lugar melhor!
                        </Typography>
                    </Box>
                </Grid>

                {/* Aqui é a parte final da Grid da container*/}
            </Grid>
        </>
    );
}

export default Sobre;

