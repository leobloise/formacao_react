import React, { Component } from 'react'
import "./estilo.css"

class FormularioCadastro extends Component {

    constructor(props) {
        super(props)
        this.titulo = "";
        this.texto = "";
    }

    extractValueFromEvent(event) {
        return event.target.value;
    }

    handleMudancaTitulo(event) {
        event.stopPropagation();
        this.titulo = this.extractValueFromEvent(event)
        console.log(this.titulo)
    }
    handleMudancaTexto(event) {
        event.stopPropagation();
        this.texto = this.extractValueFromEvent(event)
        console.log(this.texto)
    }

    _criarNota(event) {
        event.preventDefault();
        this.props.criarNota(this.titulo, this.texto)
    }

    render() {
        return (
            <form className="formulario-cadastro" onSubmit={this._criarNota.bind(this)}>
                <select className="formulario-cadastro__input">
                    {this.props.categorias.map((categoria, index) => {
                        return(
                            <option key={index}> {categoria} </option>
                        )
                    })}
                </select>
                <input type="text" placeholder="Titulo" onChange={this.handleMudancaTitulo.bind(this)}></input>
                <textarea placeholder="Escreva sua nota..." onChange={this.handleMudancaTexto.bind(this)}></textarea>
                <button> Criar Nota </button>
            </form>
        )
    }

}

export default FormularioCadastro