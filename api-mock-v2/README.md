# Api Mock para test de Front End

NODE VERSION v12.13.0

## iniciar
- `npm install` o `yarn`
- `npm start` o `yarn start`

# Servidor
- Por defecto partira en el puerto 3333
`localhost:3333`

# Endpoint

## Servicios protegidos
> los servicios que tengan los verbos [POST/PATH/DELETE] estan protegidos con `JWT`
> los servicios protegidos, requieren el paso del header `authorization` con el valor `bearer {token}`
> donde `{token}` representa el token retornado en el servicio `/login` mencionado mas abajo

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


```sql
INSERT INTO "main"."user" ("id", "name", "email", "password") VALUES ('12', 'Juan', 'juan@gmail.com', '$2b$10$Lkyid0esPF8yPx1aLahA7OUawrDs6xfsSAt7uXY6R7D77sMkW/6Oq');
INSERT INTO "main"."user" ("id", "name", "email", "password") VALUES ('14', 'admin', 'admin2@gmail.com', '$2b$10$Lkyid0esPF8yPx1aLahA7OUawrDs6xfsSAt7uXY6R7D77sMkW/6Oq');
INSERT INTO "main"."user" ("id", "name", "email", "password") VALUES ('16', 'Pedro', 'admin4@gmail.com', '$2b$10$4TzMHSV.ccTbTp6JXWWiHesCKPKfNh8vqF5WN4wxWO/bkXuyRCUeq');
INSERT INTO "main"."user" ("id", "name", "email", "password") VALUES ('17', 'Andgela', 'admin5@gmail.com', '$2b$10$Lkyid0esPF8yPx1aLahA7OUawrDs6xfsSAt7uXY6R7D77sMkW/6Oq');
INSERT INTO "main"."user" ("id", "name", "email", "password") VALUES ('18', 'admin', 'admin6@gmail.com', '$2b$10$Lkyid0esPF8yPx1aLahA7OUawrDs6xfsSAt7uXY6R7D77sMkW/6Oq');
INSERT INTO "main"."user" ("id", "name", "email", "password") VALUES ('19', 'admin', 'admin67@gmail.com', '$2b$10$Lkyid0esPF8yPx1aLahA7OUawrDs6xfsSAt7uXY6R7D77sMkW/6Oq');
INSERT INTO "main"."user" ("id", "name", "email", "password") VALUES ('20', 'Fernanda', 'fernanda@gmail.com', '$2b$10$epmj5Xrgz9tYA5HnVT0Sj.PrNkxMzmgSZyaws8lNVHj8r3XekgpyC');
INSERT INTO "main"."user" ("id", "name", "email", "password") VALUES ('21', 'admin', 'admin9@gmail.com', '$2b$10$r6afAqRv9cDpXVOGI/l4qOYWpRYCiwpvz5nz4pVB9w3j7WMSuI8ay');
INSERT INTO "main"."user" ("id", "name", "email", "password") VALUES ('22', 'Desafio Latam', 'latam@gmail.com', '$2b$10$OVLng.bLKqseKr7x5h4XQ.iK6DlHJ0ssik7GTjPAaDJv7NYmgkHvy');
INSERT INTO "main"."user" ("id", "name", "email", "password") VALUES ('23', 'claudio', 'claudio@outlook.com', '$2b$10$e7YEzg9Sm/9.TxZoKXIyg.DHigbh/5ZTtIWKoSW8HOJ4tVGX7uEZ2');
INSERT INTO "main"."user" ("id", "name", "email", "password") VALUES ('25', 'Daniela', 'danielad@gmail.com', '$2b$10$ZuHKepoLPfVnk5b3HCJf2OGbGt1w9pXIPeP8bbvrIx3TDFRpTqRJi');
```