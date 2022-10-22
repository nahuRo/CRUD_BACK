import express from "express";
const app = express();

import route from "./routes/index.js";
import { PORT } from "./config.js";

app.listen(PORT, (err) => {
	err ? console.error(err) : console.log(`server on port http://localhost:${PORT}`);
});

app.use(express.json());

app.use(route);
