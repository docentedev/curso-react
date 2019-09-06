# Hooks

Hooks son una nueva característica en React 16.8. Estos te permiten usar el estado y otras características de React sin escribir una clase.

```js
import React, { useState } from 'react';

function Example() {
  // Declara una nueva variable de estado, la cual llamaremos 'count'
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```

## Simulando Ciclo de vida con hooks

```js
import React, { useState, useEffect } from "react";

function App() {
  const [title, setTitle] = useState("Un Ejemplo de React");

  // aqui simulamos componentDidMount
  useEffect(() => {
    // El codigo aqui solo se ejecuta 1 vez
    console.log("componentDidMount simulado");
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      console.log("contador que se limpiara al desmontar");
    }, 2000);

    // Simulacion de componentWillUnmount
    // funcion de retorno que limpiara el interval
    // esto sucede al desmontar este component
    // el componente se desmonta cuando sale del dom
    return () => clearInterval(timer);
  }, []);

  // siempre se ejecutara este efecto aun en la primera
  // renderizacion incluso se title no ha cambiado
  useEffect(() => {
    console.log("componentDidUpdate simulado");
    setTitle("Bla");
  }, [title]);

  return (
    <div className="App">
      <h1>{title}</h1>
    </div>
  );
}

export default App;
```