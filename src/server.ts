import { Elysia } from "elysia";
import { swagger } from "@elysiajs/swagger";
import { logger } from "./utils";
import { PORT } from "./config";
import { supplierRoutes } from "./modules/supplier/supplier.route";

const app = new Elysia();
const port = PORT || 8080;

/**
 * Middlewares
 */
app.use(swagger());

/**
 * Routes
 */
app.use(supplierRoutes);

app.listen(port, () => {
	logger.info(`Listening on port ${port}...`);
});
