import React from 'react';
import { Box, Button, Typography, SGrid, Container, Grid } from '@mui/material'
import SendIcon from '@mui/icons-material/Send';
const Cargar = () => {
  return (
    
      <div>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4} pacing={2}>
            <Box
                color='black'
                bgcolor='red'
                marginTop={7}
                border={5}
                
                > 
                <Typography variant="h5" color="initial" align="center">RETIRO DE MEDIDOR</Typography>
                <Button 
                variant="contained" 
                color="primary" 
                endIcon={<SendIcon />} 
                size="large">
                  REETIRO
                </Button>
            </Box> 
          </Grid>
        <Grid item xs={12} sm={4}>
            <Box
            color='black'
            bgcolor='yellow'
            marginTop={7}
            border={5}
            
            > 
            <Typography variant="h5" color="initial"align="center">CORTE DE SERVICIO</Typography>
            <Button variant="contained" color="primary" endIcon={<SendIcon />}size="large">CORTE
            </Button>
            </Box> 
        </Grid>
        <Grid item xs={12} sm={4}>
            <Box
            color='black'
            bgcolor='green'
            marginTop={7}
            border={5}
            
            > 
            <Typography variant="h5"   color="initial" align="center">REAPERTURA DE SERVICIO</Typography>
            <Button variant="contained" color="primary" endIcon={<SendIcon />}size="large">REAPERTURA
            </Button>
            </Box> 
        </Grid>
        </Grid>
        </div>
   
  );
};

export default Cargar;