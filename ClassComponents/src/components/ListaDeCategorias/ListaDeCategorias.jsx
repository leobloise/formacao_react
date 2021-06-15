import React, { Component } from 'react'
import './estilo.css';

export default class ListaDeCategorias extends Component {

    constructor(props) {
        super(props)
        this.state = {categorias: []}
    }

    componentDidMount(){
        this.props.categorias.inscrever(this._novasCategorias.bind(this));
    }

    _novasCategorias(categorias) {
        console.log(categorias);
        this.setState({categorias: [...categorias]})
    }

    _handleEventoInput(event) {

        if(event.key !== 'Enter') {
            return;
        }

        this.props.adicionarCategoria(event.target.value)
 
    }

    render() {
        return(
            <section className="lista-categorias">
                <ul>
                    {this.state.categorias.map((categoria, index) => {
                        return (
                            <li key={index}>
                                {categoria}
                            </li>   
                        )
                    })}
                </ul>
                <input type="text" name="categoria" id="categoria" placeholder="Adicionar Categoria..." onKeyUp={this._handleEventoInput.bind(this)}/>
            </section>
            
        )
    }
}