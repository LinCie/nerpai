import { t } from "elysia";

const createSupplierDto = t.Object({
	name: t.String({ maxLength: 255 }),
	address: t.Optional(t.Object({ street: t.String() })),
	email: t.Optional(t.String({ maxLength: 255, format: "email" })),
	phone_number: t.Optional(t.String({ maxLength: 255 })),
	status: t.Enum({ active: "active", inactive: "inactive" }),
	notes: t.Optional(t.String()),
});

const updateSupplierDto = t.Object({
	name: t.Optional(t.String({ maxLength: 255 })),
	address: t.Optional(t.Object({ street: t.String() })),
	email: t.Optional(t.String({ maxLength: 255, format: "email" })),
	phone_number: t.Optional(t.String({ maxLength: 255 })),
	status: t.Optional(t.Enum({ active: "active", inactive: "inactive" })),
	notes: t.Optional(t.String()),
});

export { createSupplierDto, updateSupplierDto };
