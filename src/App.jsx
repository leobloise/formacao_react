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

  apagarNota(indice) {
    console.log(indice)
    let listaDeNotas = this.state.notas;
    listaDeNotas.splice(0, indice);
    let novoEstado = {notas: listaDeNotas}
    this.setState(novoEstado)
    console.log('deletar nota')

  }

  render() {

    return (
      <section id="application">
        <FormularioCadastro criarNota={this.criarNota.bind(this)}></FormularioCadastro>
        <ListaDeNotas notas={this.state.notas} apagarNota={this.apagarNota.bind(this)}></ListaDeNotas>
      </section>
      
    );
  }
  
}

export default App;
