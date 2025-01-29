import express from "express";
import { logger } from "./utils";
import morgan from "morgan";
import helmet from "helmet";

const app = express();
const port = Bun.env.PORT || 8080;

/**
 * Middlewares
 */
app
	// Morgan
	.use(
		morgan("tiny", {
			stream: {
				write: (message) => logger.info(message.trim()),
			},
		}),
	)

	// Helmet
	.use(helmet());

/**
 * Routes
 */
app.get("/", (req, res) => {
	res.send("Hello World!");
});

app.listen(port, () => {
	logger.info(`Listening on port ${port}...`);
});
