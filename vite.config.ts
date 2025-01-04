import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// @ts-ignore
const OUTPUT_DIR = process.env.OUTPUT_DIR;

const config = {
    plugins: [react()],
};

if (OUTPUT_DIR === "docs") {
    // @ts-ignore
    config["base"] = "/great-writer/";
    // @ts-ignore
    config["build"] = {
        outDir: "docs",
        assetsDir: "",
    };
}

// https://vite.dev/config/
export default defineConfig(config);
