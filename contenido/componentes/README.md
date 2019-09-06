# Componentes

## Componente Basado en Funcion

```js
// Archivo CardFooter.jsx
import React from 'react';

const CardFooter = () => {
    return (
        <div className="card__footer">
            Contenido de mi componente
        </div>
    )
};

export default CardFooter;
```

## Componente Basado en Clase
```js
// Archivo Card.jsx
import React, { Component } from 'react';

class Card extends Component {
    render() {
        return (
            <div className="card">
                Contenido de mi componente
            </div>
        );
    }
}

export default Card;
```

## Compocicion de Componentes en React
```js
// archivo Header.jsx
import React from 'react';

const Header = () => {
    return (<div className="header">Cabecera</div>)
};

export default Header;
```

```js
// archivo Container.jsx
import React from 'react';

const Container = () => {
    return (<div className="container">Contenido</div>)
};

export default Container;
```

```js
// archivo Footer.jsx
import React from 'react';

const Footer = () => {
    return (<div className="footer">Pie de Pagina</div>)
};

export default Footer;
```

### Componente que utiliza la composicion
```js
// archivo Main.jsx
import React from 'react';

import Header from './Header';
import Container from './Container';
import Footer from './Footer';

const Main = () => {
    return (
        <div className="main">
            <Header />
            <Container />
            <Footer />
        </div>
    );
};

export default Main;
```

