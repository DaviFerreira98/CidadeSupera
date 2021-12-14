import { Paper, Button, ListSubheader, ListItem, ListItemText, Typography, Box } from '@material-ui/core';
import React from 'react';
import useLocalStorage from 'react-use-localstorage';
import { useHistory } from 'react-router-dom';
import './SideBar.css'



function SideBar() {
    let history = useHistory(); // para redireccionar
    const [token, setToken] = useLocalStorage('token'); // para guardar el token en el localstorage
    function logout() {
        setToken(''); // para apagar el token del localstorage
        history.push('/login'); // para redireccionar a la pagina de login
    }
    return (
        <>
            <Box display='flex'>
                <Paper className='barra'>
                    <Button variant='outlined' className='btn'>Cidade Supera</Button>

                    <Box mx={1} className='cursor margin' paddingTop={2}>
                        <Typography variant="h6" className='margin'>
                            Home
                        </Typography>
                    </Box>
                    <Box mx={1} className='cursor'>
                        <Typography variant="h6" color="inherit" className='margin'>
                            Perfil
                        </Typography>
                    </Box>
                    <Box mx={1} className='cursor'>
                        <Typography variant="h6" color="inherit" className='margin'>
                            Alguma Coisa
                        </Typography>
                    </Box>
                    <Box mx={1} className='cursor margin'>
                        <Typography variant="h6" color="inherit" className='margin' onClick={() => logout()}>
                            Logout
                        </Typography>
                    </Box>


                </Paper>
            </Box>
        </>
    )
}

export default SideBar