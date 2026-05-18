# API REST - Gestión de Tareas

## Descripción

Este proyecto consiste en una API REST para gestión de tareas (To-Do List).

Los usuarios pueden:
- Registrarse
- Iniciar sesión
- Crear tareas
- Ver tareas
- Actualizar tareas
- Eliminar tareas

La API utiliza autenticación JWT y MongoDB Atlas como base de datos.

---

# Tecnologías utilizadas

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT (JSON Web Token)
- bcryptjs
- dotenv
- Postman

---

# Instalación

## 1. Clonar repositorio

```bash
git clone URL_DEL_REPOSITORIO
```

---

## 2. Instalar dependencias

```bash
npm install
```

---

## 3. Crear archivo .env

Crear un archivo `.env` en la raíz del proyecto.

Ejemplo:

```env
PORT=3000
MONGO_URI=TU_CONEXION_MONGODB
JWT_SECRET=supersecretkey
```

---

# Ejecutar proyecto

```bash
npm run dev
```

Servidor:

```txt
http://localhost:3000
```

---

# Estructura del proyecto

```txt
src/
 ├── config/
 ├── controllers/
 ├── middlewares/
 ├── models/
 ├── routes/
 └── app.js
```

---

# Endpoints

## Registro de usuario

### POST

```txt
/api/auth/register
```

### Body

```json
{
  "email": "test@test.com",
  "password": "123456"
}
```

---

## Login

### POST

```txt
/api/auth/login
```

### Body

```json
{
  "email": "test@test.com",
  "password": "123456"
}
```

### Respuesta

```json
{
  "message": "Login correcto",
  "token": "TOKEN_JWT"
}
```

---

# Tareas

## Crear tarea

### POST

```txt
/api/tasks
```

### Authorization

```txt
Bearer Token
```

### Body

```json
{
  "title": "Proyecto Final",
  "description": "Terminar API REST",
  "status": "pending"
}
```

---

## Obtener tareas

### GET

```txt
/api/tasks
```

---

## Actualizar tarea

### PUT

```txt
/api/tasks/:id
```

### Body

```json
{
  "status": "done"
}
```

---

## Eliminar tarea

### DELETE

```txt
/api/tasks/:id
```

---

# Funcionalidades

- Registro de usuarios
- Login con JWT
- Middleware de autenticación
- CRUD completo de tareas
- Protección de rutas
- Base de datos MongoDB
- Validaciones básicas

---

# Pruebas

Las pruebas fueron realizadas utilizando Postman.

Casos probados:

- Registro
- Login
- Crear tarea
- Obtener tareas
- Actualizar tarea
- Eliminar tarea

---

# Autor

Osvaldo Cruz
