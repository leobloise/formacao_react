import { TextField, Switch, Button, FormControlLabel } from '@material-ui/core';
import { useState } from 'react';



export function FormularioCadastro(props) {

    const [nome, setNome] = useState("");

    return (
        <form>
            <TextField  value ={nome} onChange={(e) => {
                e.preventDefault();

                setNome(e.target.value)
                
                if(e.target.value.length >= 3 ) {
                    setNome(e.target.value.substr(0, 3))
                }

            } }margin="normal" id="nome" label="Nome" variant="outlined" fullWidth></TextField>
            <TextField margin="normal"id="surname" label="Sobrenome" variant="outlined"fullWidth></TextField>
            <TextField margin="normal" id="cpf" label="CPF" variant="outlined"fullWidth></TextField>
            <FormControlLabel
                control={<Switch name="promocoes"  color="primary" defaultChecked={true}></Switch>}
                label="Promoções"
            />
            <FormControlLabel
                control={<Switch name="novidades"  color="primary" defaultChecked={true}></Switch>}
                label="Novidades"
            />
            <Button type="submit" variant="contained" color="primary"> Cadastrar </Button>
        </form>
    )

}