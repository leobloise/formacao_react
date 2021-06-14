import React, { Component } from 'react'
import CardNota from './CardNota/CardNota'

class ListaDeNotas extends Component {
    render() {
        return(
            <ul>
                {
                    Array.of('Trabalho', 'Trabalho', 'Estudos').map(
                        (titulo, index) => (
                                <li key={index}>
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