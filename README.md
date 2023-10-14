# Serverless REST API

Este ejemplo muestra cómo configurar un servicio web RESTful con integración de la API de prueba de [starwars](https://swapi.py4e.com/documentation) y como un modelo de elección tambien permite listar y crear usuarios.

## Casos de uso

- API para Aplicación Web
- API para Aplicación Movil

## Setup

`npm install`

## Variables de entorno

Crear archivo `.env` en ruta raiz

```
AWS_ACCESS_KEY_ID=
AWS_SECRET_ACCESS_KEY=
```

## Deploy

Para localhost previamente debe configurar "accessKey" y "secretAccess" de [AWS IAM](https://aws.amazon.com/iam)

`serverless offline`

Para AWS

`serverless deploy`

Para localhost como resultado se espera algo similar a:

```
Running "serverless" from node_modules

Starting Offline at stage dev (us-east-1)

Offline [http for lambda] listening on http://localhost:3002
Function names exposed for local invocation by aws-sdk:
           * listPersonas: postulacion-dev-listPersonas
           * getPersona: postulacion-dev-getPersona
           * createUser: postulacion-dev-createUser
           * getUsers: postulacion-dev-getUsers

   ┌────────────────────────────────────────────────────────────────────────────────┐
   │                                                                                │
   │   GET  | http://localhost:8181/dev/starwars/personas                           │
   │   POST | http://localhost:8181/2015-03-31/functions/listPersonas/invocations   │
   │   GET  | http://localhost:8181/dev/starwars/personas/{id}                      │
   │   POST | http://localhost:8181/2015-03-31/functions/getPersona/invocations     │
   │   POST | http://localhost:8181/dev/users                                       │
   │   POST | http://localhost:8181/2015-03-31/functions/createUser/invocations     │
   │   GET  | http://localhost:8181/dev/users                                       │
   │   POST | http://localhost:8181/2015-03-31/functions/getUsers/invocations       │
   │                                                                                │
   └────────────────────────────────────────────────────────────────────────────────┘

Server ready: http://localhost:8181 🚀
```

Para AWS como resultado se espera algo similar a:

```
Running "serverless" from node_modules

Deploying postulacion to stage dev (us-east-1)

✔ Service deployed to stack postulacion-dev (47s)

endpoints:
  GET - https://1x78twhb1b.execute-api.us-east-1.amazonaws.com/dev/starwars/personas
  GET - https://1x78twhb1b.execute-api.us-east-1.amazonaws.com/dev/starwars/personas/{id}
  POST - https://1x78twhb1b.execute-api.us-east-1.amazonaws.com/dev/users
  GET - https://1x78twhb1b.execute-api.us-east-1.amazonaws.com/dev/users
functions:
  listPersonas: postulacion-dev-listPersonas (272 kB)
  getPersona: postulacion-dev-getPersona (272 kB)
  createUser: postulacion-dev-createUser (272 kB)
  getUsers: postulacion-dev-getUsers (272 kB)

Need a faster logging experience than CloudWatch? Try our Dev Mode in Console: run "serverless dev"
```

## Utilización

### Listar personas de starwars

Consulte:

```
https://1x78twhb1b.execute-api.us-east-1.amazonaws.com/dev/starwars/personas
```

Se espera un resultado similar a:

```
    [
        {
            "nombre": "Luke Skywalker",
            "altura": "172",
            "masa": "77",
            "colorPelo": "blond",
            "colorPiel": "fair",
            "colorOjos": "blue",
            "anioNacimiento": "19BBY",
            "genero": "male",
            "mundoNatal": "https://swapi.py4e.com/api/planets/1/",
            "peliculas": [
              "https://swapi.py4e.com/api/films/1/",
              "https://swapi.py4e.com/api/films/2/",
              "https://swapi.py4e.com/api/films/3/",
              "https://swapi.py4e.com/api/films/6/",
              "https://swapi.py4e.com/api/films/7/"
            ],
            "especies": [
              "https://swapi.py4e.com/api/species/1/"
            ],
            "vehiculos": [
              "https://swapi.py4e.com/api/vehicles/14/",
              "https://swapi.py4e.com/api/vehicles/30/"
            ],
            "navesEstelares": [
              "https://swapi.py4e.com/api/starships/12/",
              "https://swapi.py4e.com/api/starships/22/"
            ],
            "fechaCreada": "2014-12-09T13:50:51.644000Z",
            "fechaEditada": "2014-12-20T21:17:56.891000Z",
            "url": "https://swapi.py4e.com/api/people/1/"
        },
    ]
```

### Listar personas de starwars por id

Consulte:

```
https://1x78twhb1b.execute-api.us-east-1.amazonaws.com/dev/starwars/personas/1
```

Se espera un resultado similar a:

```
    {
      "nombre": "Luke Skywalker",
      "altura": "172",
      "masa": "77",
      "colorPelo": "blond",
      "colorPiel": "fair",
      "colorOjos": "blue",
      "anioNacimiento": "19BBY",
      "genero": "male",
      "mundoNatal": "https://swapi.py4e.com/api/planets/1/",
      "peliculas": [
        "https://swapi.py4e.com/api/films/1/",
        "https://swapi.py4e.com/api/films/2/",
        "https://swapi.py4e.com/api/films/3/",
        "https://swapi.py4e.com/api/films/6/",
        "https://swapi.py4e.com/api/films/7/"
      ],
      "especies": [
        "https://swapi.py4e.com/api/species/1/"
      ],
      "vehiculos": [
        "https://swapi.py4e.com/api/vehicles/14/",
        "https://swapi.py4e.com/api/vehicles/30/"
      ],
      "navesEstelares": [
        "https://swapi.py4e.com/api/starships/12/",
        "https://swapi.py4e.com/api/starships/22/"
      ],
      "fechaCreada": "2014-12-09T13:50:51.644000Z",
      "fechaEditada": "2014-12-20T21:17:56.891000Z",
      "url": "https://swapi.py4e.com/api/people/1/"
    }
```

### Crear usuarios

Method: POST

Body JSON: {
"nombres": "Davis",
"apellidos": "Perez",
"correo":"davisperezg@gmail.com"
}

```
https://1x78twhb1b.execute-api.us-east-1.amazonaws.com/dev/users
```

Se espera un resultado similar a:

```
{
	"nombres": "Davis",
	"apellidos": "Perez",
	"correo": "davisperezg@gmail.com",
	"fechaCreada": "2023-10-14T20:56:29.860Z",
	"fechaActualizada": "2023-10-14T20:56:29.860Z",
	"id": "7d02141e-0ea9-4788-bd8f-52c670c168a6"
}
```

### Listar usuarios

Method: GET

Consulte:

```
https://1x78twhb1b.execute-api.us-east-1.amazonaws.com/dev/users
```

Se espera un resultado similar a:

```
[
	{
		"nombres": "Davis",
		"correo": "davisperezg@gmail.com",
		"fechaCreada": "2023-10-14T20:10:17.265Z",
		"fechaActualizada": "2023-10-14T20:10:17.265Z",
		"apellidos": "Perez",
		"id": "b9e0501e-cef2-4041-bb7f-396fb39a0f3b"
	}
]
```

## Tecnologías usadas:

- Nodejs
- Typescript
- Serverless
- AWS Lambda
- AWS DynamoDB
- AWS API Gateway

## Otros

### Serverless Offline

1. Instalar modulo

```
  "devDependencies": {
    "serverless-offline": "^13.2.0",
  }
```

2. Agregar plugin en serverless.yml

```
plugins:
  - serverless-offline
```

3. Hacer peticion desde un cliente(Postman, Insomnia)

```
custom:
  serverless-offline:
    httpPort: 8181
```
