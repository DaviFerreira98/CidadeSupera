import React from 'react';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { Typography, Box, Grid, withStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';
import './Footer.css';
import TextField from '@mui/material/TextField';
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles({
    root: {
        "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            borderColor: "white"
        },
        "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            borderColor: "#FF0064"
        },
        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#FF0064"
        },
        "& .MuiOutlinedInput-input": {
            color: "white"
        },
        "&:hover .MuiOutlinedInput-input": {
            color: "#FF0064"
        },
        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input": {
            color: "#FF0064"
        },
        "& .MuiInputLabel-outlined": {
            color: "white"
        },
        "&:hover .MuiInputLabel-outlined": {
            color: "#FF0064"
        },
        "& .MuiInputLabel-outlined.Mui-focused": {
            color: "#FF0064"
        }
    }
});

export const Footer = React.memo(function FooterDemo() {

    const styles = useStyles();

    return (
        <>
            <Grid container id="Rodape">
                <Grid item xs={4}>
                    <Box padding={4}>
                        <Box paddingBottom={1}>
                            <h3 className="txt-footer bold" >Cidade Supera</h3>
                            <Typography align='left' className='txt-footer' >Nós somos uma rede Social e temos como objetivo
                                conectar os problemas das pessoas com as soluções</Typography>
                        </Box>
                        <Box >
                            <h3 className="txt-footer bold" >Redes Sociais</h3>
                        </Box>
                        <Box paddingBottom={2}>
                            <a href="" target="_blank">
                                <FacebookIcon style={{ fontSize: 40, color: "white" }} />
                            </a>
                            <a href="" target="_blank">
                                <InstagramIcon style={{ fontSize: 40, color: "white" }} />
                            </a>
                            <a href="" target="_blank">
                                <LinkedInIcon style={{ fontSize: 40, color: "white" }} />
                            </a>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={4}>
                    <Box padding={4} marginLeft={15}>
                        <Box paddingBottom={2}>
                            <h3 className="txt-footer bold">Empresa</h3>
                            <Typography align="left"></Typography>
                            <Link to='/equipe' className="text-decorator-none2">
                                <Typography align="left">Equipe</Typography>
                            </Link>
                            <Typography align="left" className="txt-footer" >Contato</Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={4}>
                    <Box padding={4} >
                        <Box paddingBottom={2}>
                            <h3 className="txt-footer bold" >Notícias </ h3>
                            <Typography align='left' className='txt-footer' >Fique por dentro das atualizações da nossa rede social!</Typography>
                        </Box>
                        <Box paddingTop={1} >
                        <TextField id="email" label="Email" className={styles.root} variant="outlined" name="email" ></TextField>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
})

export default Footer;