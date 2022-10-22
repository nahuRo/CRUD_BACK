import { Router } from "express";
const route = Router();

import { getTasks, postTask, getTask, deleteTask, updateTask } from "../controllers/task.js";

route
	.get("/tasks", getTasks)

	.get("/task/:id", getTask)

	.post("/task", postTask)

	.delete("/task/:id", deleteTask)

	// put actualiza todo
	// patch actualiza lo que le paso, no necesariamente todo
	.patch("/task/:id", updateTask)

	.use((req, res, next) => {
		res.status(404).json({ message: "Not found" });
	});

export default route;
