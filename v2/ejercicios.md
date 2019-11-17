# Ejercicios

## Insumos:

- react-cli-2
- reactstrap
- bootstrap
- redux
- react-router-dom

## Ejercicios 

### primer ejercicio

cambiar la tabla de react a un listado de card y agregar el atributo imagen
Hacer mucho enfasis en el desarrollo por componentes

### segundo ejercicio
#### realizar las vistas login, register
  - login debe contener: nombre de usuario, password, boton
  - register debe contener: nombre de usuario, email,  emailConfirm, password, passwordConfirm, boton.

Importante: todos deben ser  componentes funcionales, los imput y boton deben ser hechos por ustedes, puden ocupar reactstrap para las columnas y grilla de bootstrap, para hacer el contenedor me refiero al card, o los titulos... deben hacer un hook de estado para cada valor de los imput, pero estos hooks estaran en el componentes login y register, ya que los input no es necesario que tengan estado. deben tener un hook de effecto en login y register que este imprimiendo siempre todos los valores.

### 3 Sistema de RUTAS
- organizar vistas en privadas y publicas
- las vistas son
    - login
    - register
    - home publico
    - dashboard privado
    - vista detalle post public
    - vista detalle post privado
    - vista nuevo post
    - vista editar post

### Proyecto final

#### Sitio web con
- vista publica para:
    - listado de post (el post puede ser lo que quieran)
    - detalle de post
    - login
    - register
- vistas privadas
    - edicion de post
    - eliminacion (solo modal, esto en la vista de detalle y listado)
    - listado de post
    - creacion de post
    - modificacion de perfil

##### Normas
- utilizar hook personalizado para input
- utilizar una vista al menos como clase
- utilizar para elementos visuales Componentes funcionales
- utilizar para rutas, react-router-dom
- utilizar redux para el manejo de estado
- utilizar reactstrap para los componentes y grilla
- el sitio debe ser responsivo
- la data se debe consumir de una API (preferentemente api-mock-v2)
