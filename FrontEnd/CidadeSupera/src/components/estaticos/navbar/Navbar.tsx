import React from 'react';
import { AppBar, Toolbar, Typography, Box,} from '@material-ui/core';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    return (
        <>
            <AppBar position="static" id="navegacao">
                <Toolbar variant="dense" >
                    <Box className='cursor' style={{flexGrow: 1}}>
                        <Link to='/home' className="text-decorator-none">
                        <Typography variant="h5" color="inherit" >
                            Cidade Supera
                        </Typography>
                        </Link>
                    </Box>
                    <Box marginLeft="750px" display="flex">
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
                        <Link to='/login' className='text-decorator-none'>
                            <Box mx={1} className='cursor'>
                                <Typography variant="h6" color="inherit">
                                    Entrar
                                </Typography>
                            </Box>
                        </Link>

                    </Box>

                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar;
