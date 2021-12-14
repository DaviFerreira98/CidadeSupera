import React from 'react';
import { AppBar, Toolbar, Typography, Box, Container,} from '@material-ui/core';
import { Link,  useHistory } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
import './Navbar.css';

function Navbar() {
    let history = useHistory(); // para redireccionar
    const [token, setToken] = useLocalStorage('token'); // para guardar el token en el localstorage
    function logout(){
        setToken(''); // para apagar el token del localstorage
        history.push('/login'); // para redireccionar a la pagina de login
    }
    return (
        <>
            <AppBar position="static" id="navegacao">
                <Toolbar variant="dense" >
                    <Box mx={1}>
                        <img src="https://i.imgur.com/x1m8CnY.png" alt="logo" className="logo" />
                    </Box>
                    <Box  style={{flexGrow: 1}} >
                        <Link to='/home' className="text-decorator-none">
                        <Typography variant="h5" color="inherit" className='cursor' >
                            Cidade Supera
                        </Typography>
                        </Link>
                    </Box>
                    <Box display="flex">
                        <Box mx={1} className='cursor'>
                            <Link to='/home' className="text-decorator-none">
                            <Typography variant="h6" color="inherit">
                                Home
                            </Typography>
                            </Link> 
                        </Box>
                        <Box mx={1} className='cursor'>
                            <Link to='/sobre' className="text-decorator-none">
                            <Typography variant="h6" color="inherit">
                                Sobre
                            </Typography>
                            </Link>
                        </Box>
                        <Box mx={1} className='cursor'>
                            <Link to='/equipe' className="text-decorator-none">
                            <Typography variant="h6" color="inherit">
                                Equipe
                            </Typography>
                            </Link>
                        </Box>
                        <Box mx={1} className='cursor'>
                            <Link to='/login' className='text-decorator-none'>
                                <Typography variant="h6" color="inherit">
                                    Entrar
                                </Typography>
                            </Link>
                        </Box>
                    </Box>

                </Toolbar>
            </AppBar>
        </>
    
    )
}

export default Navbar;
