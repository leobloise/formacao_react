import FormularioCadastro from "./Components/FormularioCadastro"
import {Container, Typography} from '@material-ui/core';
import 'fontsource-roboto'

function App() {
  return (
    <Container component="article" maxWidth="sm">
      <Typography variant="h3" align="center" component="h1"> Formulário de cadastro </Typography>
      <FormularioCadastro></FormularioCadastro>
    </Container>
  );
}

export default App;
