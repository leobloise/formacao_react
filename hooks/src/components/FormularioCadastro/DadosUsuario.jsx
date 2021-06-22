import React, { useState } from 'react'
import { TextField, Button } from '@material-ui/core'


function DadosUsuario({aoEnviar, validacoes}) {
    
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [erros, setErros] = useState({senha: {
        valido: true,
        texto: ""
    }})

    function validarCampos(event) {
        const {name, value} = event.target;
        const ehValido = validacoes[name](value);
        let novoEstado = {...erros}
        novoEstado[name] = ehValido
        setErros(novoEstado)
    }


    function possoEnviar() {
    
        for(let campo in erros) {
            if(!erros[campo].valido) {
                return false
            }
        }

        return true;

    }

    return (
        <form onSubmit={event => {
            event.preventDefault()
            if(possoEnviar()) {
                aoEnviar({
                    email,
                    senha
                });
            }
            
        }}>
            <TextField id="email" label="email" type="email"  variant="outlined"
        margin="normal"
        fullWidth
        value={email}
        required
        onChange={
            event => setEmail(event.target.value)
        }></TextField>
            <TextField id="senha" label="senha" type="password"  variant="outlined"
        margin="normal"
        fullWidth
        required
        onBlur={validarCampos}
        helperText={erros.senha.texto}
        error={!erros.senha.valido}
        value={senha}
        name="senha"
        onChange={
            event => setSenha(event.target.value)
        }>
        </TextField>
            <Button type="submit"  variant="contained" color="primary"> Proximo </Button>
        </form>
    )
}

export default DadosUsuario