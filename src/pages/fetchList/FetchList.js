import React, {useEffect} from "react";
import {
    Grid,
    Paper,
    Box
} from '@mui/material';

/*

import { appSelector } from "../../redux/appRedux";
import { useSelector } from 'react-redux';



    const todoList = useSelector(appSelector.todo);

    const totalTareas = todoList.length;

    // Tareas completadas
    const tareasCompletadas = todoList.filter(task => task.completed);
  
    // Cantidad de tareas completadas
    const tareasCompletadasCount = tareasCompletadas.length;

    // Tareas pendientes
    const tareasPendientes = todoList.filter(task => !task.completed);

    // Cantidad de tareas pendientes
    const tareasPendientesCount = tareasPendientes.length;
*/
const FetchList = () => {

    return (
    <Grid container spacing={3}>
        <Grid item xs={12} >
            <Paper sx={{ p: 1, backgroundColor: '#B5FF86', border: '4px dashed #000' }}>
                <Box sx={{ m: 1 }}>
                    FetchList
                </Box>
            </Paper>
        </Grid>
    </Grid>
    
    );
};

export default FetchList;