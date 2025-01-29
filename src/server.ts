import express from "express";
import { logger } from "./utils";
import morgan from "morgan";
import helmet from "helmet";

const app = express();
const port = Bun.env.PORT || 8080;

app

	/**
	 * Middlewares
	 */

	// Morgan
	.use(
		morgan("tiny", {
			stream: {
				write: (message) => logger.info(message.trim()),
			},
		}),
	)

	// Helmet
	.use(helmet())

	/**
	 * Routes
	 */

	.get("/", (req, res) => {
		res.send("Hello World!");
	})

	/**
	 * Listen command
	 */

	.listen(port, () => {
		logger.info(`Listening on port ${port}...`);
	});
