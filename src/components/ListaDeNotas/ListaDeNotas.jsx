import React, { Component } from 'react'
import CardNota from '../CardNota/CardNota'
import './estilo.css'

class ListaDeNotas extends Component {
    render() {
        return(
            <ul className="lista-notas">
                {
                    Array.of(1,2,3,4,5,6,7,8,9,10).map(
                        (titulo, index) => (
                                <li className="lista-notas_item" key={index}>
                                    <CardNota></CardNota>
                                </li>
                            )
                    )
                }

            </ul>
        );
    }
}

export default ListaDeNotas