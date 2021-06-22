import React, {useEffect, useState} from "react";
import DadosPessoais from "./DadosPessoais";
import DadosUsuario from "./DadosUsuario";
import DadosDeEntrega from "./DadosDeEntrega";
import { Stepper, Typography, Step, StepLabel } from "@material-ui/core";

function FormularioCadastro({aoEnviar, validacoes}) {

  const [etapaAtual, setEtapaAtual] = useState(0);
  const [dadosColetados, setDadosColetados] = useState({})


  useEffect(() => {

    if(etapaAtual == formularios.length ) {
      console.log(dadosColetados)
    }

  })

  function proximo() {
    setEtapaAtual(etapaAtual + 1);
  }

  const formularios  = [
    <DadosUsuario aoEnviar={coletarDados} validacoes={validacoes}></DadosUsuario>,
    <DadosPessoais aoEnviar={coletarDados} validacoes={validacoes}></DadosPessoais>,
    <DadosDeEntrega aoEnviar={coletarDados} validacoes={validacoes}></DadosDeEntrega>,
    <Typography variant="h5"> Obrigado pelo cadastro </Typography>
  ]

  function coletarDados(dados) {
    setDadosColetados({...dadosColetados, ...dados})
    proximo();
  }

  return (
    <>
    <Stepper activeStep={etapaAtual}>
      
    <Step>  <StepLabel>Login</StepLabel></Step>
    <Step>   <StepLabel>Pessoal</StepLabel></Step>
    <Step>  <StepLabel>Entrega</StepLabel></Step>
    <Step>  <StepLabel>Finalização</StepLabel></Step>
    </Stepper>
    {
        formularios[etapaAtual]
      }
    </>
  );

}

export default FormularioCadastro;
