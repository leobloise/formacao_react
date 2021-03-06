import React, { useState } from "react";
import { TextField, Button, Switch, FormControlLabel } from "@material-ui/core";

function DadosPessoais({aoEnviar, validacoes}) {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [cpf, setCpf] = useState("");
  const [promocoes, setPromocoes] = useState(true);
  const [novidades, setNovidades] = useState(false);
  const [erros, setErros] = useState({cpf:{valido:true, texto:""}, nome:{valido: true, texto: ""}})


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
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if(possoEnviar()) {
          aoEnviar({nome, sobrenome, cpf, novidades, promocoes});
        } 
      }}
    >
      <TextField
        value={nome}
        onChange={(event) => {
          setNome(event.target.value);
        }}
        name="nome"
        id="nome"
        label="Nome"
        variant="outlined"
        margin="normal"
        onBlur={
          validarCampos
        }
        error={!erros.nome.valido}
        helperText={erros.nome.texto}
        fullWidth
      />
      <TextField
        value={sobrenome}
        onChange={(event) => {
          setSobrenome(event.target.value);
        }}
        id="sobrenome"
        label="Sobrenome"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        value={cpf}
        onChange={(event) => {
          setCpf(event.target.value);
        }}

        onBlur={validarCampos}
        error={!erros.cpf.valido}
        helperText={erros.cpf.texto}
        name="cpf"
        id="CPF"
        label="CPF"
        variant="outlined"
        margin="normal"
        fullWidth
      />

      <FormControlLabel
        label="Promo????es"
        control={
          <Switch
            checked={promocoes}
            onChange={(event) => {
              setPromocoes(event.target.checked);
            }}
            name="promocoes"
            color="primary"
          />
        }
      />

      <FormControlLabel
        label="Novidades"
        control={
          <Switch
            checked={novidades}
            onChange={(event) => {
              setNovidades(event.target.checked);
            }}
            name="novidades"
            color="primary"
          />
        }
      />

      <Button type="submit" variant="contained" color="primary">
        Proximo
      </Button>
    </form>
  );
}

export default DadosPessoais;
