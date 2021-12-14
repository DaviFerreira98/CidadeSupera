import { Button, Grid, Box, FormControl, FormHelperText, InputLabel, Select, TextField, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import { busca, buscaId, post } from '../../../services/Service';
import './CadastroPost.css';

function CadastroPost() {
    const [foto, setFoto] = useState(null);

    return (

        <Grid container direction="row" justifyContent="center" alignItems="center" >
            <Grid item xs={6} justifyContent="center">
                <Box paddingBottom={10} paddingTop={10}>
                    <form >
                        <Typography variant="h3" color="textSecondary" component="h1" align="center" >Crie nova postagem</Typography>
                        <TextField id="titulo" label="titulo" variant="outlined" name="titulo" margin="normal" fullWidth />
                        <TextField id="texto" label="texto" name="texto" variant="outlined" margin="normal" fullWidth />
                        <input type="file" />

                        <FormControl >
                            <InputLabel id="demo-simple-select-helper-label">Tema </InputLabel>
                            <Select
                                labelId="demo-simple-select-helper-label"
                                id="demo-simple-select-helper">
                            </Select>
                            <FormHelperText>Escolha um tema para a postagem</FormHelperText>
                            <Button type="submit" variant="contained" className="botaoFinal">
                                Finalizar
                            </Button>
                        </FormControl>
                    </form>
                </Box>
            </Grid>
        </Grid>
    )
}

export default CadastroPost
