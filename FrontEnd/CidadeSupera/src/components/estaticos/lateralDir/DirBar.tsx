import { Paper, Button, ListSubheader,ListItem, ListItemText } from '@material-ui/core'
import { Box } from '@mui/material'
import React from 'react'
import './DirBar.css'

const tags = [
    {id:1 , name:"#Educação"},
    {id:2 , name:"#Segurança"},
    {id:3 , name:"#Saude"},
    {id:4 , name:"#Transporte"},
    {id:5 , name:"#Infraestrutura"}
    
]

function DirBar() {
    return (
        <Box display='flex'>
        <Paper className='dir'>
            <Button variant='outlined' className='btn'>Amigos</Button>
            <ListSubheader className='cor-nav'></ListSubheader>
            {
                    tags.map((item)=>(
                        <ListItem dense button key={'item-${item.id}-%{item.name}'}>
                            <ListItemText primary={'#${item.name}'}></ListItemText>
                        </ListItem>
                    ))
                }
        </Paper>
        </Box>
    )
}

export default DirBar