import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import Image from "next/image.js";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
});
