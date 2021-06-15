import React, { Component } from 'react'
import "./estilo.css"

class FormularioCadastro extends Component {

    constructor(props) {
        super(props)
        this.titulo = "";
        this.texto = "";
        this.categoria = "Sem categoria";
        this.state = {categorias: []}
        this._novasCategorias = this._novasCategorias.bind(this)
    }

    extractValueFromEvent(event) {
        return event.target.value;
    }

    componentDidMount() {
        this.props.categorias.inscrever(this._novasCategorias)
    }

    componentWillUnmount() {
        this.props.categorias.desinscrever(this._novasCategorias);
    }

    _novasCategorias(categorias) {
        this.setState({categorias: categorias})
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

    handleMudancaSelect(event) {
        event.stopPropagation();
        this.categoria = event.target[event.target.selectedIndex].text
        console.log(this.categoria);
    }

    _criarNota(event) {
        event.preventDefault();
        this.props.criarNota(this.titulo, this.texto, this.categoria);
    }

    render() {
        return (
            <form className="formulario-cadastro" onSubmit={this._criarNota.bind(this)}>
                <select onChange={this.handleMudancaSelect.bind(this)}>
                    <option defaultValue={true}>Sem categoria</option>
                    {this.state.categorias.map((categoria, index) => {
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