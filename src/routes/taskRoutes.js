const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const Task = require("../models/Task");

const router = express.Router();

// Crear tarea
router.post("/", authMiddleware, async (req, res) => {
    try {
        const { title, description, status, dueDate } = req.body;

        if (!title) {
            return res.status(400).json({
                error: true,
                message: "El título es requerido"
            });
        }

        const task = await Task.create({
            title,
            description,
            status,
            dueDate,
            user: req.user.id
        });

        res.status(201).json(task);

    } catch (error) {
        console.log("ERROR CREANDO TAREA:", error);

        res.status(500).json({
            error: true,
            message: "Error creando tarea"
        });
    }
});

// Obtener tareas
router.get("/", authMiddleware, async (req, res) => {
    try {
        const tasks = await Task.find({
            user: req.user.id
        });

        res.json(tasks);

    } catch (error) {
        console.log("ERROR OBTENIENDO TAREAS:", error);

        res.status(500).json({
            error: true,
            message: "Error obteniendo tareas"
        });
    }
});
// Actualizar tarea
router.put("/:id", authMiddleware, async (req, res) => {

    try {

        const task = await Task.findOneAndUpdate(

            {
                _id: req.params.id,
                user: req.user.id
            },

            req.body,

            {
                new: true
            }

        );

        if (!task) {

            return res.status(404).json({
                error: true,
                message: "Tarea no encontrada"
            });

        }

        res.json(task);

    } catch (error) {

        console.log(error);

        res.status(500).json({
            error: true,
            message: "Error actualizando tarea"
        });

    }

}); // Eliminar tarea
router.delete("/:id", authMiddleware, async (req, res) => {

    try {

        const task = await Task.findOneAndDelete({

            _id: req.params.id,
            user: req.user.id

        });

        if (!task) {

            return res.status(404).json({
                error: true,
                message: "Tarea no encontrada"
            });

        }

        res.json({
            message: "Tarea eliminada correctamente"
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            error: true,
            message: "Error eliminando tarea"
        });

    }

});

module.exports = router;