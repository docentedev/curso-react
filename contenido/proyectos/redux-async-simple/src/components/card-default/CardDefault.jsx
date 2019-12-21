import React, { Component } from 'react';
import './CardDefault.css';

/**
 * CardDefault
 * @version v1.0.0
 * 
 * @param {*} props 
 */
class CardDefault extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="card-default">CardDefault!</div>
        );
    }
}

export default CardDefault;