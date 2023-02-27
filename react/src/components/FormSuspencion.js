import React from "react";
import { Container,FormControl,Input,InputLabel } from "@mui/material"; 



function FormSuspencion(){

 return(

<Container>
  <FormControl>
    <InputLabel htmlFor="">Calle</InputLabel>
    <Input id="Calle" aria-describedby="my-helper-text" />
  </FormControl>
  <FormControl>
    <InputLabel htmlFor="">Numero</InputLabel>
    <Input id="Calle" aria-describedby="my-helper-text" />
  </FormControl>
  <FormControl>
    <InputLabel htmlFor="">Medida Medidor</InputLabel>
    <Input id="Calle" aria-describedby="my-helper-text" />
  </FormControl>
  <FormControl>
    <InputLabel htmlFor="">Realizado por: </InputLabel>
    <Input id="Calle" aria-describedby="my-helper-text" />
  </FormControl>

</Container>   

 
);
}

export default FormSuspencion;