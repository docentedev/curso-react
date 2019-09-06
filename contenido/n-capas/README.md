# Aplicacion N Capas

Considerando que el primer nivel sera `src`
Esta estructura es un ejemplo posible a utilizar
pero dependera de la aplicacion la estructura
aun asi, este sera un buen punto de partida
```ansi
.
+-- index.js
+-- index.css
+-- App.jsx
+-- App.css
+-- components // para componentes de composicion funcional
|   +-- index.js // Para exportan componentes en un solo archivo
|   +-- component-example // estructura de ejemplo de un component
|       +-- ComponentExample.jsx
|       +-- ComponentExample.css
|       +-- ComponentExample.text.jsx
+-- views // Para component principales que podrian estar basados en clases
|   +-- component-example // estructura de ejemplo de un component
|       +-- ComponentExample.jsx
|       +-- ComponentExample.css
|       +-- ComponentExample.text.jsx
+-- utils // metodos utilizarios como helpers
|   +-- index.js
```