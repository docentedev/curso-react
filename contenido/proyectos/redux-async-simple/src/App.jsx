import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import { addActionAsync, subtractActionAsync } from './store/actions/counter.actions';

function App(props) {
    const { number, loading } = props.counter;
    return (
        <div className="App">
            <button disabled={loading} onClick={() => props.onAddCounter(number - 1)}>-</button>
            <input type="text" readOnly value={number} />
            <button disabled={loading} onClick={() => props.onSubtractCounter(number + 1)}>+</button>
            <br />
            {loading && (<strong>realizando operacion...</strong>)}
        </div>
    );
}

const mapStateToProps = (state) => {
    return state;
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAddCounter: (number) => {
            dispatch(addActionAsync(number));
        },
        onSubtractCounter: (number) => {
            dispatch(subtractActionAsync(number));
        },
    };
}


const connectedApp = connect(
    mapStateToProps,
    mapDispatchToProps,
)(App);

export default connectedApp;
