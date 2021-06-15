import { TextField, Switch, Button, FormControlLabel } from '@material-ui/core';
import { useState } from 'react';



export function FormularioCadastro({aoEnviar, validarCpf}) {

    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [cpf, setCpf] = useState("");
    const [promocao, setPromocao] = useState(true)
    const [novidades, setNovidades] = useState(true)
    const [erros, setErros] = useState({cpf: {
        valido: true,
        texto: ""
    }})


    return (
        <form onSubmit={e => {
            e.preventDefault()
            aoEnviar({nome, sobrenome, cpf, promocao, novidades})
        }}>
            <TextField  value ={nome} onChange={(e) => {
                e.preventDefault();
                
                let tempNome = e.target.value

                setNome(tempNome);

            } }margin="normal" id="nome" label="Nome" variant="outlined" fullWidth></TextField>
            <TextField value={sobrenome} onChange={
                (e => {
                    e.preventDefault();
                    setSobrenome(e.target.value)
                })
            } margin="normal"id="surname" label="Sobrenome" variant="outlined"fullWidth></TextField>
            <TextField 
            error={!erros.cpf.valido}
            helperText={erros.cpf.texto}
            onBlur={
                (e) => {
                    const ehValido = validarCpf(e.target.value)
                    setErros({
                        cpf: ehValido
                    })
                }
            }
            margin="normal" onChange={
                (e => {
                    e.preventDefault();
                    setCpf(e.target.value)
                })
            }id="cpf" label="CPF" variant="outlined"fullWidth></TextField>
            <FormControlLabel
                control={<Switch 
                    onChange={
                        e => {
                            setPromocao(e.target.checked)
                        }
                    }
                    name="promocoes"  color="primary" checked={promocao}></Switch>}
                label="Promoções"
            />
            <FormControlLabel
                control={<Switch name="novidades"  
                onChange={
                    e => {
                        setNovidades(e.target.checked)
                    }
                }
                color="primary" checked={novidades}></Switch>}
                label="Novidades"
            />
            <Button type="submit" variant="contained" color="primary"> Cadastrar </Button>
        </form>
    )

}