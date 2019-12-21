import React from 'react';
import './App.css';
import CicloDeVida from './components/ciclo-de-vida/CicloDeVida';
import Context from './Context';
import Context2 from './Context2';

import HijoDeContext from './components/hijo-de-context/HijoDeContext';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Un texto',
      message: '',
    }
  }

  handlerOnInput = (event) => {
    const { value } = event.target;
    this.setState({ title: value });
  }

  render() {
    const { title } = this.state;
    const ctx2 = {
      title: 'some title',
    };
    
    return (
      <div>
        <CicloDeVida title={title} />
        <input value={title} onChange={this.handlerOnInput} />
        
        <Context.Provider value="hola">
          <Context2.Provider value={ctx2}>
            <HijoDeContext />
          </Context2.Provider>
        </Context.Provider>
      </div>
    );
  }
}

export default App;
