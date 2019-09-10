# Api Mock para test de Front End

## iniciar
- `npm install` o `yarn`
- `npm start` o `yarn start`

# Servidor
- Por defecto partira en el puerto 3333
`localhost:3333`

# Endpoint

## Servicios protegidos
> los servicios que tengan los verbos [POST/PATH/DELETE] estan protegidos con `JWT`

- /api/user [GET/POST]
    - `GET`: retorna todos los usuarios
    - `POST`: crear un usuario
```json
{
	"password": "1234.qwer",
	"email": "jhon.doe@gmail.com",
	"name": "Jhon Doe"
}
```

- /api/user/{id} [DELETE/PATCH/GET]
    - `DELETE`: espera que `{id}` sea el id del elemento a eliminar
    - `GET`: retorna un user especifico, donde `{id}` representa el id de ese user
    - `PATCH`: se debe especificar el id del user a actualizar en `{id}`, en el body se debe pasar el siguiente tipo de objeto:
```json
{
	"password": "1234.qwer",
	"email": "jhon.doe@gmail.com",
	"name": "Jhon Doe"
}
```
- /login [POST]

> este servicio solo permite el usuario `admin` contraseña `admin1234`
servicio que retornara el `JWT`, se debe pasar en el body lo siguiente:
```json
{
	"username": "admin",
	"password": "admin1234"
}
```


## TODO
- crear servicio de registro de usuario
- generar multi roles
- servicio para la carga de imagenes