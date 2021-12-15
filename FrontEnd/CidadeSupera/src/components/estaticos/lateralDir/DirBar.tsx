import { Paper, Button, ListSubheader,ListItem, ListItemText } from '@material-ui/core'
import { Box, Typography } from '@mui/material'
import React from 'react'
import './DirBar.css'


function DirBar() {
    return (
        <Box display='flex'>
        <Paper className='dir'>
            <Button variant='outlined' className='btn'>Amigos</Button>
            <Box display='flex' alignItems='center' justifyContent='center'>
                <img src="https://image.freepik.com/fotos-gratis/retrato-de-homem-branco-isolado_53876-40306.jpg" alt="" className='amigos' />
                Roberto
            </Box>
            <Box display='flex' alignItems='center' justifyContent='center'>
                <img src="https://image.freepik.com/fotos-gratis/retrato-de-homem-branco-isolado_53876-40306.jpg" alt="" className='amigos' />
                Roberto
            </Box>
        </Paper>
        </Box>
    )
}

export default DirBar