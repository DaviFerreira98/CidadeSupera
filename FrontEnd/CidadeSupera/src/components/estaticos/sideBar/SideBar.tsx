import { Paper, Button, ListSubheader, ListItem, ListItemText, Typography, Box } from '@material-ui/core';
import React from 'react';
import useLocalStorage from 'react-use-localstorage';
import { useHistory } from 'react-router-dom';
import './SideBar.css'

const topicos = [
    {id:1 , name:"Educação"},
    {id:2 , name:"Segurança"},
    {id:3 , name:"Saude"},
    {id:4 , name:"Transporte"},
    {id:5 , name:"Infraestrutura"}
    
]


function SideBar() {
    let history = useHistory(); // para redireccionar
    const [token, setToken] = useLocalStorage('token'); // para guardar el token en el localstorage
    function logout(){
        setToken(''); // para apagar el token del localstorage
        history.push('/login'); // para redireccionar a la pagina de login
    }
    return (
    <>
        <Paper className='barra'>
            <Button variant='outlined' className='btn'>Cidade Supera</Button>
            <Box mx={1} className='cursor'>
                        {/* botão de logout com evento de click */}
                        <Typography variant="h6" color="inherit" onClick={()=> logout()}>
                            Logout
                        </Typography>
                        {/* botão de logout com evento de click */}
                    </Box>
                
        </Paper>
    </>
    )
}

export default SideBar
