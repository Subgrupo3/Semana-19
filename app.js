const express = require("express");
const port = 8080;

const app = express(); //instancia de la aplicación

app.use(express.json());

// Crea un arreglo para almacenar usuarios
let usuarios = [];

app.get("/", (req, res) => {
  res.send("<h1>Bienvenid@ al servidor</h1>"); // Define una ruta raíz que responda con un mensaje de bienvenida.
});

app.get("/usuarios", (req, res) => {
  try {
    res.status(200).json(usuarios);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al obtener los usuarios" });
  }
});

// Obtiene un usuario por id
app.get("/usuarios/:id", (req, res) => {
  try {
    if (!(req.params.id >= 0) || !(req.params.id < usuarios.length)) {
      res.status(400).json({ message: "ID inválido" });
    } else if (
      usuarios[req.params.id] == null ||
      usuarios[req.params.id] == undefined
    ) {
      res.status(404).json({ message: "Usuario no encontrado" });
    } else {
      res.status(200).json(usuarios[req.params.id]);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al obtener el usuario" });
  }
});

// Agrega un nuevo usuario
app.post("/usuarios", (req, res) => {
  usuarios.push(req.body);
  res.status(201).json({ id: usuarios.length - 1 });
});

// Actualiza un usuario
app.put("/usuarios/:id", (req, res) => {
  try {
    if (!(req.params.id >= 0) || !(req.params.id < usuarios.length)) {
      res.status(400).json({ message: "ID inválido" });
    } else if (usuarios[req.params.id] == undefined) {
      res.status(404).json({ message: "Usuario no encontrado" });
    } else {
      usuarios[req.params.id] = req.body;
      res.sendStatus(204);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al actualizar el usuario" });
  }
});

// Elimina un usuario
app.delete("/usuarios/:id", (req, res) => {
  try {
    if (!(req.params.id >= 0) || !(req.params.id < usuarios.length)) {
      res.status(400).json({ message: "ID inválido" });
    } else if (usuarios[req.params.id] == undefined) {
      res.status(404).json({ message: "Usuario no encontrado" });
    } else {
      usuarios.splice(req.params.id, 1);
      res.sendStatus(200);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al eliminar el usuario" });
  }
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
