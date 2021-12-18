import { Paper, Button, ListSubheader, ListItem, ListItemText, Typography, Box } from '@material-ui/core';
import React from 'react';
import { useHistory, Link } from 'react-router-dom';
import './SideBar.css'
import { useDispatch, useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { addToken } from '../../../store/tokens/actions';
import { toast } from 'react-toastify';


function SideBar() {

    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens);
    let history = useHistory();
    const dispatch = useDispatch();

    function logout() {
        dispatch(addToken(''));
        toast.info('Usuário deslogado', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            theme: "colored",
            progress: undefined,
        })
        history.push('/login');
    }

    return (
        <>
            <Box display='flex'>
                <Paper className='barra'>
                    <Box paddingLeft={5}>
                    <img src="https://i.imgur.com/9OXbFlu.png" alt="logo Cidade Supera" className='logoSideBar' />
                    </Box>
                    
                    <Box mx={1} className='cursor margin' paddingTop={2}>
                        <Link to='/home' className="text-decorator-none">
                            <Typography variant="h6" className='margin'>
                                Home
                            </Typography>
                        </Link>
                    </Box>
                    <Box mx={1} className='cursor'>
                        <Link to='/perfil' className="text-decorator-none">
                            <Typography variant="h6" color="inherit" className='margin'>
                                Perfil
                            </Typography>
                        </Link>
                    </Box>
                    <Box mx={1} className='cursor'>
                        <Link to='/temas' className="text-decorator-none">
                            <Typography variant="h6" color="inherit" className='margin'>
                                Temas
                            </Typography>
                        </Link>
                    </Box>
                    <Box mx={1} className='cursor'>
                        <Link to='/listaPostagem' className="text-decorator-none">
                            <Typography variant="h6" color="inherit" className='margin'>
                                Deletar Post
                            </Typography>
                        </Link>
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

export default SideBar;