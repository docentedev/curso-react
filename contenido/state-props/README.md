# State Props y Javascript en JSX

## Javascript en JSX

Para utilizar Javascript dentro de JSX se utiliza `{contenido}`, donde contenido
sera la variable u operacion Js que queramos imprimir dentro

```js
// archivo Footer.jsx
const texto = 'Sumando numeros:';
const Footer = () => (
    <div>
        <div>{texto}</div>
        <div>{5 + 5}</div>
    </div>
);
export default Footer;
```

## State de Componentes Basados en Clases

```js
class Home extends Component {
    
    // se declara el state en el contructor
    constructor(props) {
        // se debe llamar al constructor de Component obligatoriamente
        super(props);
        // declaracion del state, variables de la clase
        // que al ser actualizadas, generaran que se ejecute el ciclo
        // de actualizacion
        this.state = {
            title: 'React',
            description: 'Un curso de programacion',
        };
    }

    setTitulo() {
        // el unico metodo para actualizar un elemento
        // en el state, es setState
        this.setState({ title: 'Otro titulo' });
    }
}
```

## Props de Componentes Basados en Clases y Funcionales

## Props
por defecto cualquier componente siempre tendra el props.children
seran los hijos del componente

### Prop Children
```js
// archivo Footer.jsx
const Footer = (props) => (
    <div>{props.children}</div>
);
export default Footer;

// archivo Container.jsx

import Footer from './Footer.jsx';

const Container = (props) => (
    <div>
        <Footer>Contenido que se vera en el children del Footer</Footer>
    </div>
);
```

### Props por atributo del tag

```js
// archivo Footer.jsx
const Footer = (props) => (
    <div>{props.title}</div>
);
export default Footer;

// archivo Container.jsx

import Footer from './Footer.jsx';

const Container = (props) => (
    <div>
        <Footer title="Curso de react" />
    </div>
);
```

El acceso de props en clases se hace `this.props.atributo`, en el ejemplo
anterior seria `this.props.title` y `this.props.children`

## Efecto de cambiar Props y State
Cada vez que cambia un valor en el `state` o cambia una `props`
se ejecutara el ciclo de vide de Actualizacion