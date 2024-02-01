import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dotenv from "dotenv";

dotenv.config();
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    "process.env.VITE_REACT_APP_OPENWEATHERMAP_KEY": JSON.stringify(
      process.env.VITE_REACT_APP_OPENWEATHERMAP_KEY
    ),
    "process.env.VITE_REACT_APP_OPENWEATHERMAP_BASE": JSON.stringify(
      process.env.VITE_REACT_APP_OPENWEATHERMAP_BASE
    ),
  },
});
