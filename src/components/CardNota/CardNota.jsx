import React, { Component } from 'react'
import './estilo.css'


export default class CardNota extends Component {

    render() {
        return(
            <section className="card-nota"> 
                <header>
                    <h3>
                        Título
                    </h3>
                    <p>
                        Escreva sua nota
                    </p>
                </header>
            </section>
        );
    }

}