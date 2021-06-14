import React, { Component } from 'react'
import "./estilo.css"

class FormularioCadastro extends Component {

    render() {
        return (
            <form className="formulario-cadastro">
                <input type="text" placeholder="Titulo"></input>
                <textarea placeholder="Escreva sua nota..."></textarea>
                <button> Criar Nota </button>
            </form>
        )
    }

}

export default FormularioCadastro