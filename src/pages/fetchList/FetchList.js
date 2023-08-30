import React, {useEffect} from "react";
import {
    Grid,
    Paper,
    Box
} from '@mui/material';

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