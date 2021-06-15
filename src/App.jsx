import React, { Component } from "react";
import ListaDeNotas from "./components/ListaDeNotas/ListaDeNotas";
import ListaDeCategorias from './components/ListaDeCategorias/ListaDeCategorias';
import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro";
import './assets/index.css';

class App extends Component {
  
  constructor() {
    super()
    this.state = {
      notas: [],
      categorias: ["Trabalho", "Esportes"]
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
    let listaDeNotas = this.state.notas;
    listaDeNotas.splice(indice, 1);
    let novoEstado = {notas: listaDeNotas}
    this.setState(novoEstado)
  }

  criarCategoria(categoria) {
    const novoEstado = {notas: this.state.notas, categorias: [...this.state.categorias, categoria]}
    this.setState(novoEstado);
  }

  render() {

    return (
      <section id="application">
        <FormularioCadastro categorias={this.state.categorias}criarNota={this.criarNota.bind(this)}></FormularioCadastro>
        <main className="conteudo-principal">
          <ListaDeCategorias adicionarCategoria={this.criarCategoria.bind(this)} categorias={this.state.categorias}></ListaDeCategorias>
          <ListaDeNotas notas={this.state.notas} apagarNota={this.apagarNota.bind(this)}></ListaDeNotas>
        </main>
        
        
      </section>

    );
  }
  
}

export default App;
