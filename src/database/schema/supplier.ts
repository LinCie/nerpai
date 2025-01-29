import {
	json,
	mysqlEnum,
	mysqlTable,
	serial,
	text,
	timestamp,
	varchar,
} from "drizzle-orm/mysql-core";

const supplierTable = mysqlTable("suppliers", {
	id: serial().primaryKey(),
	name: varchar("name", { length: 255 }).notNull(),
	address: json("address"),
	email: varchar("email", { length: 255 }),
	phoneNumber: varchar("phone_number", { length: 255 }),
	status: mysqlEnum("status", ["active", "inactive"]).notNull(),
	notes: text("notes"),
	createdAt: timestamp("created_at").notNull().defaultNow(),
	updatedAt: timestamp("updated_at").notNull().onUpdateNow(),
	deletedAt: timestamp("deleted_at"),
});

type Supplier = typeof supplierTable.$inferSelect;
type NewSupplier = typeof supplierTable.$inferInsert;
type UpdateSupplier = Partial<NewSupplier>;

export { supplierTable };
export type { Supplier, NewSupplier, UpdateSupplier };
