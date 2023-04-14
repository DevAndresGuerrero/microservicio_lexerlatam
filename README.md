
# Microservicio LexerLatam

Implementation of technologies requested for technical testing.


## Run Locally

Clone the project

```bash
  git clone https://github.com/DevAndresGuerrero/microservicio_lexerlatam
```

Go to the project directory

```bash
  cd microservicio_lexerlatam
```

Copy file environments

```bash
  cp .env.example .env
```

Run docker compose

```bash
  npm run dk:up
```


## Tech Stack

**Server:** Node, Express

**Database:** PostgreSQL

**Container:** Docker
## Lessons Learned

Microservicio para la gestion de empleados y departamentos (CRUD).

## Models

These will be the leading models of this test

`departamento`

`empleado`


## API Reference

#### Get all departamentos

```http
  GET /api/departamentos
```

#### Get one departamento

```http
  GET /api/departamentos/${codigo}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `codigo` | `integer` | **Required**. codigo of departamento to fetch |


#### Create departamento

```http
  POST /api/departamentos
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `nombre`      | `string` | **Required**. nombre of departamento to create |
| `presupuesto` | `integer` | **Required**. presupuesto of departamento to create |


#### Update departamento

```http
  PUT /api/departamentos/${codigo}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `codigo`      | `integer` | **Required**. codigo of departamento to fetch |
| `nombre`      | `string`  | **Required**. nombre of departamento to update |
| `presupuesto` | `integer` | **Required**. presupuesto of departamento to update |


#### Delete departamento

```http
  DELETE /api/departamentos/${codigo}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `codigo` | `integer` | **Required**. codigo of departamento to fetch and delete |


#### Get all empleados

```http
  GET /api/empleados
```

#### Get one empleado

```http
  GET /api/empleados/${codigo}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `codigo` | `integer` | **Required**. codigo of empleado to fetch |


#### Create empleado

```http
  POST /api/empleados
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `nif`       | `string`  | **Required**. nif of empleado to create |
| `nombre`    | `string`  | **Required**. nombre of empleado to create |
| `apellido1` | `string`  | **Required**. apellido1 of empleado to create |
| `apellido2` | `string`  | **Required**. apellido2 of empleado to create |
| `codigo_departamento` | `integer` | **Required**. codigo_departamento. This in the departamento model |


#### Update empleado

```http
  PUT /api/empleados/${codigo}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `codigo`      | `integer` | **Required**. codigo of empleado to fetch |
| `nif`         | `string`  | **Required**. nif of empleado to update |
| `nombre`      | `string`  | **Required**. nombre of empleado to update |
| `apellido1`   | `string`  | **Required**. apellido1 of empleado to create |
| `apellido2`   | `string`  | **Required**. apellido2 of empleado to create |
| `codigo_departamento` | `integer` | **Required**. codigo_departamento. This in the departamento model |


#### Delete empleado

```http
  DELETE /api/empleados/${codigo}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `codigo` | `integer` | **Required**. codigo of empleado to fetch and delete |
