import { eq, isNull } from "drizzle-orm";
import { ModuleService } from "@/instances";
import {
	supplierTable,
	type NewSupplier,
	type UpdateSupplier,
} from "@/database/schema";

class SupplierService extends ModuleService {
	public async index() {
		return this.db
			.select()
			.from(supplierTable)
			.where(isNull(supplierTable.deletedAt));
	}

	public async show(id: number) {
		return this.db
			.select()
			.from(supplierTable)
			.where(eq(supplierTable.id, id))
			.then((rows) => rows[0] ?? null);
	}

	public async create(supplier: NewSupplier) {
		const result = await this.db
			.insert(supplierTable)
			.values(supplier)
			.$returningId()
			.then((rows) => rows[0] ?? null);

		return { ...supplier, ...result };
	}

	public async update(supplier: UpdateSupplier, id: number) {
		await this.db
			.update(supplierTable)
			.set(supplier)
			.where(eq(supplierTable.id, id));

		return { ...supplier, id };
	}

	public async destroy(id: number) {
		await this.db
			.update(supplierTable)
			.set({ deletedAt: new Date() })
			.where(eq(supplierTable.id, id));

		return { id };
	}
}

export { SupplierService };
