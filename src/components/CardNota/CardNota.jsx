import React, { Component } from 'react'
import './estilo.css'


export default class CardNota extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <section className="card-nota"> 
                <header>
                    <h3>
                        {this.props.titulo}
                    </h3>
                    <p>
                        {this.props.texto}
                    </p>
                </header>
            </section>
        );
    }

}