import React, { Component } from 'react'
import './estilo.css'
import { ReactComponent as DeleteSVG} from'../../assets/delete.svg'

export default class CardNota extends Component {

    apagar() {
        this.props.apagarNota(this.props.indice)
    }

    render() {
        return(
            <section className="card-nota"> 
                <header>
                    <h3>
                        {this.props.titulo}
                        <DeleteSVG onClick={this.apagar.bind(this)}></DeleteSVG>
                    </h3>
                </header>
                    <p>
                        {this.props.texto}
                    </p>
                
            </section>
        );
    }

}