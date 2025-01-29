import type { Logger } from "pino";
import { db } from "@/database";
import { logger } from "@/utils";

class ModuleService {
	private readonly logger: Logger;
	public readonly db = db;

	constructor() {
		this.logger = logger;
	}
}

export { ModuleService };
