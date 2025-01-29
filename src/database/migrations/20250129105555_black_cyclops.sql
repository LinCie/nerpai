CREATE TABLE `suppliers` (
	`id` serial AUTO_INCREMENT NOT NULL,
	`name` varchar(255) NOT NULL,
	`address` json,
	`email` varchar(255),
	`phone_number` varchar(255),
	`status` enum('active','inactive') NOT NULL,
	`notes` text,
	`created_at` timestamp NOT NULL DEFAULT (now()),
	`updated_at` timestamp NOT NULL ON UPDATE CURRENT_TIMESTAMP,
	`deleted_at` timestamp,
	CONSTRAINT `suppliers_id` PRIMARY KEY(`id`)
);
