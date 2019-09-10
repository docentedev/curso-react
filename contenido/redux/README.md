# Redux

- proyecto ejemplo Redux [link](https://github.com/docentedev/curso-react/tree/master/contenido/proyectos/react-redux-todos)

lo minimo aceptable para utilizar organizadamente redux sera:
- un archivo donde crear el store
- archivo de acciones
- archivo de reducers
- un archivo para combinar reducers
- un archivo de constantes para el nombre de las acciones

la estructura minima que complementara a lo visto en n capas para redux sera

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
+-- store
    +-- index.js // creamos el store aqui
    +-- actions
    |   +-- todos.actions.js
    +-- reducers
    |   +-- index.js // combinamos los reducers
    |   +-- todos.reducer.js
    +-- conts.js // constantes para nombre de acciones
