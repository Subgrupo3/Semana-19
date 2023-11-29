Para iniciar el servidor escribe "npm run dev" en la terminal.

La API tiene las siguientes rutas:

- GET `http://localhost:8080`: Responde con un mensaje de bienvenida.
- GET `http://localhost:8080/usuarios`: Responde con todos los usuarios.
- GET `http://localhost:8080/usuarios/:id`: Responde con un usuario específico por su ID.
- POST `http://localhost:8080/usuarios`: Agrega un nuevo usuario. El cuerpo de la solicitud debe ser un objeto JSON. Responde con el ID del usuario creado.
- PUT `http://localhost:8080/usuarios/:id`: Actualiza un usuario existente por su ID. El cuerpo de la solicitud debe ser un objeto JSON.
- DELETE `http://localhost:8080/usuarios/:id`: Elimina un usuario existente por ID.