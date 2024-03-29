// SPDX-FileCopyrightText: 2023 Havs- och vattenmyndigheten
//
// SPDX-License-Identifier: Apache-2.0

import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react-swc";
import svgr from "vite-plugin-svgr";
import eslint from "vite-plugin-eslint";

// https://vitejs.dev/config/
export default defineConfig({
	base: "/",
	plugins: [
		react({ plugins: [["@swc/plugin-styled-components", {}]] }),
		svgr(),
		eslint(),
	],
	server: {
		port: 3000,
	},
	build: {
		outDir: "build",
	},
	test: {
		globals: true,
		environment: "jsdom",
		css: true,
		reporters: ["verbose"],
		exclude: ["megalinter-reports", "node_modules"],
		coverage: {
			reporter: ["text", "json", "html"],
			include: ["src/**/*"],
		},
	},
});
