import { pool } from "../db.js";

export const getTasks = async (req, res) => {
	try {
		const [result] = await pool.query("SELECT * FROM tasks");

		res.json(result);
	} catch (error) {
		return res.status(500).json({
			message: error.message,
		});
	}
};

export const getTask = async (req, res) => {
	try {
		const [result] = await pool.query("SELECT * FROM tasks WHERE id = ?", [req.params.id]);

		res.json(result);
	} catch (error) {
		return res.status(500).json({
			message: error.message,
		});
	}
};

export const postTask = async (req, res) => {
	try {
		const [result] = await pool.query(
			"INSERT INTO tasks (tittle, description) VALUES (?, ?)",
			[req.body.tittle, req.body.description]
		);

		const response = {
			id: result.insertId,
			...req.body,
		};

		res.json(response);
	} catch (error) {
		return res.status(500).json({
			message: error.message,
		});
	}
};

export const deleteTask = async (req, res) => {
	try {
		const [result] = await pool.query("DELETE FROM tasks WHERE id = ?", [req.params.id]);
		if (result.affectedRows <= 0) {
			return res.send("task not found");
		}
		res.json("deleted task");
	} catch (error) {
		return res.status(500).json({
			message: error.message,
		});
	}
};

// falta
export const updateTask = async (req, res) => {
	const { tittle, description } = req.body;
	try {
		// el IFNULL me cambia el valor si le paso algo
		// de lo contrario me deja el valor que estaba
		const [result] = await pool.query(
			"UPDATE tasks SET tittle = IFNULL(?, tittle), description = IFNULL(?, description) WHERE id = ?",
			[tittle, description, req.params.id]
		);

		if (result.affectedRows <= 0) {
			return res.send("task not found");
		}

		res.json("task updated");
	} catch (error) {
		return res.status(500).json({
			message: error.message,
		});
	}
};
