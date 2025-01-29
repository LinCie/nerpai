import { Elysia, t } from "elysia";
import { SupplierService } from "./supplier.service";
import { createSupplierDto, updateSupplierDto } from "./supplier.dto";

const supplierService = new SupplierService();
const supplierRoutes = new Elysia({ prefix: "/api/suppliers" });

supplierRoutes

	// Index
	.get("/", () => {
		try {
			const suppliers = supplierService.index();
			return suppliers;
		} catch (error) {
			return { error: error, message: "Internal server error" };
		}
	})

	// Show
	.get(
		"/:id",
		async ({ params }) => {
			const id = Number(params.id);
			if (Number.isNaN(id)) return { message: "id is not a number" };

			try {
				const supplier = await supplierService.show(id);
				if (!supplier) {
					return { message: "Supplier not found" };
				}
				return { supplier };
			} catch (error) {
				return { error: error, message: "Internal server error" };
			}
		},
		{ params: t.Object({ id: t.String() }) },
	)

	// Create
	.post(
		"/",
		async ({ body }) => {
			try {
				const supplier = await supplierService.create(body);
				return { supplier };
			} catch (error) {
				return { error: error, message: "Internal server error" };
			}
		},
		{ body: createSupplierDto },
	)

	// Update
	.patch(
		"/:id",
		async ({ body, params }) => {
			const id = Number(params.id);
			if (Number.isNaN(id)) return { message: "id is not a number" };

			try {
				const supplier = await supplierService.update(body, id);
				return { supplier };
			} catch (error) {
				return { error: error, message: "Internal server error" };
			}
		},
		{ params: t.Object({ id: t.String() }), body: updateSupplierDto },
	)

	// Destroy
	.delete(
		"/:id",
		async ({ params }) => {
			const id = Number(params.id);
			if (Number.isNaN(id)) return { message: "id is not a number" };

			try {
				await supplierService.destroy(id);
				return;
			} catch (error) {
				return { error: error, message: "Internal server error" };
			}
		},
		{ params: t.Object({ id: t.String() }) },
	);

export { supplierRoutes };
