import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';

import TextField from '@mui/material/TextField';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import FormLabel from '@mui/material/FormLabel';


/* icons */
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import HowToRegOutlinedIcon from '@mui/icons-material/HowToRegOutlined';
import { searchUsers } from './services';


function ElemSearch({ search, setSearch, setUsers }) {

  const handleUserChange = (event) => {
    setSearch(prev => {
      return {
        ...prev,
        [event.target.name]: event.target.value
      }
    });
  };

  async function _searchUsers () {
    let users = await searchUsers(search.us_nome,
        search.us_cpf_cnpj,
        search.doc_sei,
        search.proc_sei)

        setUsers(users)

  }

    return (
        <Box>
            <FormLabel id="demo-controlled-radio-buttons-group">Pesquisa</FormLabel>
            <Box className='flex flex-row justify-between' sx={{ marginTop: 2, marginBottom: 2 }}>
                {/* Pesquisa de Usários*/}
                <Box className='flex flex-row'>
                    <Box className='mx-4'>
                        <TextField id="us_nome"
                            name="us_nome"
                            value={search.us_nome}
                            label="Usuário"
                            variant="standard"
                            onChange={handleUserChange} />
                    </Box>
                    <Box className='mx-4'>
                        <TextField id="us_cpf_cnpj"
                            name="us_cpf_cnpj"
                            value={search.us_cpf_cnpj}
                            label="CPF/CNPJ"
                            variant="standard"
                            onChange={handleUserChange} />
                    </Box>
                    <Box className='mx-4'>
                        <TextField id="doc_sei"
                            name="doc_sei"
                            value={search.doc_sei}
                            label="Documento"
                            variant="standard"
                            onChange={handleUserChange} />

                    </Box>
                    <Box className='mx-4'>
                        <TextField id="proc_sei"
                            name="proc_sei"
                            value={search.proc_sei}
                            label="Processo"
                            variant="standard"
                            onChange={handleUserChange} />
                    </Box>
                    <IconButton size="large" onClick={() => {
                        _searchUsers()
                      
                    }}>
                        <SearchIcon />
                    </IconButton>
                </Box>
            </Box>

        </Box>

    )
}
export {ElemSearch}