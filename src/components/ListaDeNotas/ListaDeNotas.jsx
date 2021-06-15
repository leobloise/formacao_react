import React, { Component } from 'react'
import CardNota from '../CardNota/CardNota'
import './estilo.css'

class ListaDeNotas extends Component {

    render() {
        return(
            <ul className="lista-notas">
                {
                    this.props.notas.map(
                        (nota, index) => (
                                <li className="lista-notas_item" key={index}>
                                    <CardNota indice={index} titulo={nota.titulo} texto={nota.texto} categoria={nota.categoria} apagarNota={this.props.apagarNota}></CardNota>
                                </li>
                            )
                    )
                }

            </ul>
        );
    }
}

export default ListaDeNotas