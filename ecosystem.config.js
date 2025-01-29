export const apps = [
	{
		name: "nerpai",
		script: ".dist/server.js",
		interpreter: "bun",
		env: {
			PATH: `${process.env.HOME}/.bun/bin:${process.env.PATH}`,
		},
		watch: false,
		autorestart: true,
		max_memory_restart: "1024M",
	},
];
