export const apps = [
	{
		name: "nerpai",
		cwd: "./.dist",
		script: "./server",
		exec_interpreter: "none",
		exec_mode: "fork",
		instances: 1,
		autorestart: true,
		watch: false,
		max_memory_restart: "1024M",
	},
];
