import { Paper, Button, ListSubheader,ListItem, ListItemText } from '@material-ui/core'
import React from 'react'
import './DirBar.css'

const tags = [
    {id:1 , name:"#Educação"},
    {id:2 , name:"#Segurança"},
    {id:3 , name:"#Saude"},
    {id:4 , name:"#Transporte"},
    {id:5 , name:"#Infraestrutura"}
    
]

function SideBar() {
    return (
        <Paper className='logo-nome'>
            <Button variant='outlined' className='btn'>Cidade Supera</Button>
            <ListSubheader className='cor-nav'>{"tags"}</ListSubheader>
            {
                    tags.map((item)=>(
                        <ListItem dense button key={'item-${item.id}-%{item.name}'}>
                            <ListItemText primary={'#${item.name}'}></ListItemText>
                        </ListItem>
                    ))
                }
        </Paper>
    )
}

export default SideBar