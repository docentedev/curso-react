# Javascript

## Declaracion de variables
```js
let title = 'Mi Curso de React';
const DESCRIPTION = 'Descripcion no modificable';
```

## Funcion Flecha
```js
// Funcion normal
function miFuncion1(a, b) {
    return a + b;
}
// Funcion normal anonima
const miFuncion2 = function(a, b) {
    return a + b;
};
// Funcion Flecha
const miFuncion3 = (a, b) => {
    return a + b;
};
// Funcion Flecha de un solo parametro
const miFuncion4 = a => {
    return a * 10;
};
// Funcion Flecha de un solo parametro resumida
const miFuncion5 = a => a * 10;
// Funcion Flecha resumida con mas de un parametro
const miFuncion6 = (a, b) => a + b;
```

## Metodos de Array
```js
const array1 = [1,2,3,4,5,6];

array1.map(n => n + 1);
// salida: [2,3,4,5,6,7];

array1.filter(n => n > 3);
// salida: [4,5,6];
array1.reduce((acumulador, valActual) => acumulador + valActual, 0);
// salida: 21
```

## Template string
```js
const t1 = 'Resultado';
const n1 = 23;
const n2 = 7;

const templateString = `${t1}: ${n1 + n2}`;
// templateString = 'Resultado: 30'
```

## Operador Spread
```js
const obj1 = {
    title: 'React',
    description: 'un curso',
};

const obj2 = {
    fecha: 2019,
};

const obj3 = {
    ...obj1,
    ...obj2,
    docente: 'Claudio Rojas',
};
/* obj3:
{
    title: 'React',
    description: 'un curso',
    fecha: 2019,
    docente: 'Claudio Rojas',
}

*/
```

## Asignación por destructuring

```js
const array1 = [1, 'dos', '3'];

const [ valor1, valor2, valor3 ] = array1;
/*
valor1: 1
valor2: "dos"
valor3: "3"
*/

const obj1 = {a: 1, b: 'dos', c: '3'];

const { a, b, c } = obj1;
/* 
a: 1
b: "dos"
c: "3"
*/
```

## Funciones que retornan funciones
> para mas informacion, buscar el significado de `Closures en javascript`
```js
const funcion1 = (a) => {
    return (b) => {
        return a + b;
    }
};

const funcion1Llamada = funcion1(10);
// salida: sera la funcion interna
funcion1Llamada(5);
// salida: 15

// Tambien se puede llamar asi
funcion1(10)(5)
// salida: 15
```

## Modulos EcmaScript
```js
/* Export por defecto */
// archivo suma.js
const suma = (a, b) => a + b;

export default suma;

// archivo calculador.js
import suma from './suma';
suma(10, 5);

/* Export por nombre */
// archivo suma.js
export const suma = (a, b) => a + b;

// archivo calculador.js
import { suma } from './suma';
suma(10, 5);
```

## Clases
```js

class Vehiculo {
    constructor() {
        this.ruedas = 0;
    }
};

class Auto extends Vehiculo {

    setRuedas(ruedas) {
        this.ruedas = ruedas;
    }
}


const auto1 = new Auto();
auto1.setRuedas(12)
// auto1: Auto {ruedas: 12}
```