import React, { Component } from 'react';
import './CicloDeVida.css';

/**
 * CicloDeVida
 * @version v1.0.0
 * 
 * @param {*} props 
 */
class CicloDeVida extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 1,
            version: 'v1.0.0',
            numberList: [1,2,3,4,5],
        };
    }

    componentDidMount() {
        console.log('Componente montado');
        // Lugar indicado para llamar a un servicio
        // se ejecuta solo la primera vez
    }

    componentDidUpdate() {
        console.log('Componente Actualizado, cambio de state o props');
    }

    render() {
        const { title } = this.props;
        const { counter, version, numberList } = this.state;
        return (
            <div className="ciclo-de-vida">
                {title}
                <hr />
                {counter}
                <hr />
                {version}
                <hr />
                {numberList.map(e => (<div key={e}>{e}</div>))}               
            </div>
        );
    }
}

export default CicloDeVida;