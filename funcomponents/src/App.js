import FormularioCadastro from "./Components/FormularioCadastro"
import {Container, Typography} from '@material-ui/core';
import 'fontsource-roboto'

function App() {
  return (
    <Container component="article" maxWidth="sm">
      <Typography variant="h3" align="center" component="h1"> Formulário de cadastro </Typography>
      <FormularioCadastro validarCpf={validarCpf} aoEnviar={aoEnviarForm}></FormularioCadastro>
    </Container>
  );
}

function aoEnviarForm(dados) {
  console.log(dados)
}

function validarCpf(cpf) {
  if(cpf.length < 11 || cpf.length > 11)
    return({valido: false, texto: "O CPF deve ter 11 digitos"})
  return({valido: true, texto: ""})
}

export default App;
