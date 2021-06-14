import React, { Component } from "react";
import ListaDeNotas from "./components/ListaDeNotas/ListaDeNotas";
import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro";
import './assets/index.css';

class App extends Component {
  
  constructor() {
    super()
    this.state = {
      notas: []
    }
  }

  criarNota(titulo, texto) {
    const novaNota = {
      titulo: titulo,
      texto: texto
    }
    const novoEstado = {notas: [...this.state.notas, novaNota]}
    this.setState(novoEstado)
  }

  render() {

    return (
      <section id="application">
        <FormularioCadastro criarNota={this.criarNota.bind(this)}></FormularioCadastro>
        <ListaDeNotas notas={this.state.notas}></ListaDeNotas>
      </section>
    );
  }
  
}

export default App;
