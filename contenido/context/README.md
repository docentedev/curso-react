# Context

Basado en el patron `Publish y subscribe`

***Context.js***
```js
import { createContext } from 'react';

const initialContext = {
    theme: 'dark',
};
export default Context = createContext(initialState);
```

***App.jsx***
```js
import React, { Component } from 'react';
import Context from './Context';
import Consumidor1 from './Consumidor1';
import Consumidor2 from './Consumidor2';
import Consumidor3 from './Consumidor3';
import Consumidor4 from './Consumidor4';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            theme: 'dark',
        };
    }

    // en vez de utilizar toggleTheme() {}, utilizamos el arrow funcion
    toggleTheme = () => {
        // otra opcion de setState, es utilizar una funcion calback
        this.setState((prevState) => {
            // retornamos el nuevo state
            return { theme: prevState.theme === 'dark' ? 'dark' : 'light' };
        });
    }

    render () {
        const ctx = {
            data: this.state,
            toggleTheme: this.toggleTheme,
        };
        return (
            <Context.Provider value={ctx}>
                <Consumidor1 />
                <Consumidor2 />
                <Consumidor3 />
                <Consumidor4 />
            </Context.Provider>
        )
    }
}

export default App;
```

***Consumidor1.jsx***
```js
import React, { Component } from 'react';
import Context from './Context';

class Consumidor1 extends Component {
    static contextType = Context;
    redender () {
        return (
            <div>
                {this.context.data.theme}
                <button onClick={this.context.toggleTheme}>Cambiar tema</button>
            </div>
        )
    }
}
export default Consumidor1;
```

***Consumidor2.jsx***
```js
import React, { Component } from 'react';
import Context from './Context';

class Consumidor2 extends Component {
    redender () {
        return (
            <div>
                {this.context.data.theme}
                <button onClick={this.context.toggleTheme}>Cambiar tema</button>
            </div>
        )
    }
}
Consumidor2.contextType = Context;

export default Consumidor2;
```

***Consumidor3.jsx***
```js
import React, { Component } from 'react';
import Context from './Context';

class Consumidor3 extends Component {
    redender () {
        return (
            <div>
                <Context.Consumer>
                    {(ctx) => (
                        <div>
                            {ctx.data.theme}
                            <button onClick={ctx.toggleTheme}>Cambiar tema</button>
                        </div>
                    )}
                </Context.Consumer>
            </div>
        )
    }
}
export default Consumidor2;
```

***Consumidor3.jsx***
Esta forma tambien es aplicable a componentes basados en funcion

```js
import React, { Component } from 'react';
import Context from './Context';

class Consumidor3 extends Component {
    redender () {
        return (
            <div>
                <Context.Consumer>
                    {(ctx) => (
                        <div>
                            {ctx.data.theme}
                            <button onClick={ctx.toggleTheme}>Cambiar tema</button>
                        </div>
                    )}
                </Context.Consumer>
            </div>
        )
    }
}
export default Consumidor3;
```

***Consumidor4.jsx***
Utilizando Hoock `se vera luego mas a fondo`

```js
import React, { useContext } from 'react';
import Context from './Context';

const Consumidor4 = () => {
    const ctx = useContext(Context);
    return (
        <div>
            <div>
                {ctx.data.theme}
                <button onClick={ctx.toggleTheme}>Cambiar tema</button>
            </div>
        </div>
    );
}
export default Consumidor4;
```