import React, { Component } from "react";
import ListaDeNotas from "./components/ListaDeNotas/ListaDeNotas";
import ListaDeCategorias from './components/ListaDeCategorias/ListaDeCategorias';
import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro";
import Categorias from './data/Categorias';
import ArrayDeNotas from './data/Notas';
import './assets/index.css';

class App extends Component {
  
  constructor() {
    super()
    this.categorias = new Categorias();
    this.notas = new ArrayDeNotas();
  }

  render() {

    return (
      <section id="application">
        <FormularioCadastro categorias={this.categorias.categorias}criarNota={this.notas.adicionarNota.bind(this.notas)}></FormularioCadastro>
        <main className="conteudo-principal">
          <ListaDeCategorias adicionarCategoria={this.categorias.adicionarCategoria.bind(this.categorias)} categorias={this.categorias.categorias}></ListaDeCategorias>
          <ListaDeNotas notas={this.notas.notas} apagarNota={this.notas.apagarNotas.bind(this.notas)}></ListaDeNotas>
        </main>
        
        
      </section> 

    );
  }
  
}

export default App;
