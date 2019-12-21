import React, { Component, useContext, useEffect } from 'react';
import './HijoDeContext.css';
import Context from '../../Context';
import Context2 from '../../Context2';
/*
class HijoDeContext extends Component {
    render() {
        return (
            <div className="hijo-de-context">
                <strong>{this.context}</strong>
            </div>
        );
    }
}
HijoDeContext.contextType = Context;
*/

/*
class HijoDeContext extends Component {
    static contextType = Context;
    render() {
        return (
            <div className="hijo-de-context">
                <strong>{this.context}</strong>
            </div>
        );
    }
}
*/

/*
class HijoDeContext extends Component {
    render() {
        return (
            <div className="hijo-de-context">
                <Context.Consumer>
                    {(context) =>(
                        <strong>{context}</strong>
                    )}
                </Context.Consumer>
                <Context2.Consumer>
                    {(context) =>(
                        <strong>{context.title}</strong>
                    )}
                </Context2.Consumer>
            </div>
        );
    }
}
*/

const HijoDeContext = () => {
    const context = useContext(Context);
    const ctx2 = useContext(Context2);
    return (
        <div className="hijo-de-context">
            {context}
            {ctx2.title}
        </div>
    );
};

export default HijoDeContext;