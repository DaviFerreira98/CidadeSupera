import React, {useCallback} from 'react'
import { AppBar, Toolbar } from '@mui/material'
import './NovoPost.css'
import { Box, Typography,Button } from '@material-ui/core'
import {useDropzone} from 'react-dropzone'

function NovoPost() {
    const onDrop = useCallback(acceptedFiles => {
        console.log(acceptedFiles);
      }, [])
      const {getRootProps, getInputProps} = useDropzone({
        onDrop,
        multiple:false,
        accept: 'image/*',
        })

    return (
        <div>
            <Box display='flex' className='root' border='1px solid #DDD'>
                <Box width='50%' height='100%'>
                <div {...getRootProps()}>
                    <input {...getInputProps()} />
                    <Button>Carregar Imagem</Button>
                </div>
                    <p>Titulo</p>
                    <p>Texto</p>
                    <p>Editor markdown</p>
                </Box>
                <Box width='50%' height='100%'>Resultado</Box>
            </Box>
            <Box>
            <Button color='primary' variant='outlined'>Publicar</Button>
            </Box>
        </div>
    )
}

export default NovoPost
